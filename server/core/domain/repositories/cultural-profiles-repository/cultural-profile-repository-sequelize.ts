import { GetterCulturalProfiles } from '@/domain/entities'
import { MissingParamError } from '@/domain/usecases/errors'
import GetterCache from '@/helpers/cache/getter-cache/getter-cache-use-case'
import SetterCache from '@/helpers/cache/setter-cache/setter-cache-use-case'
import promiseErrorHandler from '@/helpers/error-handler'
import { left, PromiseEither, right } from '@/shared/either'
import { IGetterCulturalProfile } from '@/types/getters'
import { ICulturalProfile } from '@/types/setters'
import { Sequelize } from 'sequelize'

import localidades from '../../constants/localidades.json'
import segmentos from '../../constants/segmentos.json'
import { NotFoundProfile } from '../errors/not-found-profile'
import {
	CityOrSegmentNameResponse,
	CulturalProfileByCity,
	CulturalProfileBySegment,
	CulturalProfileRepository,
} from './cultural-profile.interface'
import {
	QUERY_CULTURAL_PROFILE,
	QUERY_CULTURAL_PROFILE_BY_CITY,
	QUERY_CULTURAL_PROFILE_BY_ID,
	QUERY_CULTURAL_PROFILE_BY_SEGMENT,
	QUERY_CULTURAL_PROFILE_RAND,
	QUERY_CULTURAL_PROFILE_SEARCH,
	QUERY_GROUP_BY_CITY,
	QUERY_GROUP_BY_SEGMENT,
} from './queries'

const HOUR = 3600
const DAY = HOUR * 24

export async function generateCulturalProfile(
	profile: any
): Promise<IGetterCulturalProfile> {
	if (!profile) {
		throw new MissingParamError({ parameter: 'profile' })
	}

	if (profile?.get) {
		const profilePlain = profile.get({ plain: true })
		return GetterCulturalProfiles.build(profilePlain).params()
	}

	return GetterCulturalProfiles.build(profile).params()
}

export class CulturalProfileRepositorySequelize
	implements CulturalProfileRepository {
	constructor(private readonly database: Sequelize) { }

	async findAllByCity(): PromiseEither<CulturalProfileByCity[], Error> {
		return this.database.transaction(async (transaction) => {
			const [culturalProfiles] = await this.database.query(
				QUERY_CULTURAL_PROFILE,
				{
					transaction,
				}
			)

			const cities = Array.from(
				new Set(
					culturalProfiles.map((item: IGetterCulturalProfile) => item.segment)
				)
			)

			const items: CulturalProfileByCity[] = await Promise.all([
				...cities.map(async (city) => {
					const filtered = culturalProfiles.filter(
						(artist: IGetterCulturalProfile) => artist.city === city
					)

					const items = await Promise.all([
						...filtered.map(generateCulturalProfile),
					])

					return { city, items }
				}),
			])

			return left(items)
		})
	}

	async findAllBySegment(): PromiseEither<CulturalProfileBySegment[], Error> {
		return this.database.transaction(async (transaction) => {
			const [culturalProfiles] = await this.database.query(
				QUERY_CULTURAL_PROFILE,
				{
					transaction,
				}
			)

			const segments = Array.from(
				new Set(
					culturalProfiles.map((item: IGetterCulturalProfile) => item.segment)
				)
			)

			const items = await Promise.all([
				...segments.map(async (segment) => {
					const filtered = culturalProfiles.filter(
						(artist: IGetterCulturalProfile) => artist.segment === segment
					)

					const items = await Promise.all([
						...filtered.map(generateCulturalProfile),
					])

					return { segment, items }
				}),
			])

			return left(items)
		})
	}

	async findById(id: number): PromiseEither<IGetterCulturalProfile, Error> {
		return this.database.transaction(async (transaction) => {
			const [error, [query]] = await promiseErrorHandler(
				this.database.query(QUERY_CULTURAL_PROFILE_BY_ID(id), { transaction })
			)

			if (error) return right(error)

			const [profile] = query

			if (!profile) return right(new NotFoundProfile(undefined, id))

			const iProfile = await generateCulturalProfile(profile)

			return left(iProfile)
		})
	}

	async findAllByWhereSegment(
		segment: string
	): PromiseEither<IGetterCulturalProfile[], Error> {
		const KEY = `::profiles::${segment}`

		const cacheOrErr = await GetterCache.execute(KEY)

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		const term = segmentos[segment]

		return this.database.transaction(async (transaction) => {
			const [error, queryResult] = await promiseErrorHandler(
				this.database.query(QUERY_CULTURAL_PROFILE_BY_SEGMENT(term), {
					transaction,
				})
			)

			if (error) return right(error)

			const profiles = await Promise.all([
				...queryResult[0].map(generateCulturalProfile),
			])

			await SetterCache.execute(KEY, JSON.stringify(profiles), HOUR)

			return left(profiles)
		})
	}

	async findAllByWhereCity(
		city: string
	): PromiseEither<IGetterCulturalProfile[], Error> {
		const KEY = `::profiles::${city}`

		const cacheOrErr = await GetterCache.execute(KEY)

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		const term = localidades[city]

		return this.database.transaction(async (transaction) => {
			const [error, queryResult] = await promiseErrorHandler(
				this.database.query(QUERY_CULTURAL_PROFILE_BY_CITY(term), {
					transaction,
				})
			)

			if (error) return right(error)

			const profiles = await Promise.all([
				...queryResult[0].map(generateCulturalProfile),
			])

			await SetterCache.execute(KEY, JSON.stringify(profiles), HOUR)

			return left(profiles)
		})
	}

	async findGroupByCity(): PromiseEither<string[], Error> {
		const cacheOrErr = await GetterCache.execute('::cities')

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		return this.database.transaction(async (transaction) => {
			const [error, cities] = await promiseErrorHandler(
				this.database.query(QUERY_GROUP_BY_CITY, { transaction })
			)

			if (error) return right(error)
			const citiesString = cities[0].map((item: any) => item.city)

			await SetterCache.execute('::cities', JSON.stringify(citiesString))

			return left(citiesString)
		})
	}

	async findGroupBySegment(): PromiseEither<string[], Error> {
		const cacheOrErr = await GetterCache.execute('::segments')

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		return this.database.transaction(async (transaction) => {
			const [error, segments] = await promiseErrorHandler(
				this.database.query(QUERY_GROUP_BY_SEGMENT, { transaction })
			)

			if (error) return right(error)

			const segmentsString = segments[0].map((item: any) => item.segment)

			await SetterCache.execute('::segments', JSON.stringify(segmentsString))

			return left(segmentsString)
		})
	}

	async findCityOrSegmentName(
		name: string
	): PromiseEither<CityOrSegmentNameResponse, Error> {
		const [segmentFound, cityFound] = [segmentos[name], localidades[name]]

		if (segmentFound)
			return left({
				name: segmentFound,
				type: 'segment',
			})
		if (cityFound)
			return left({
				name: cityFound,
				type: 'city',
			})

		return right(new Error('Not found'))
	}

	async findRandom(length = 20): PromiseEither<ICulturalProfile[], Error> {
		const cacheOrErr = await GetterCache.execute(
			'::random-profile-culture-home'
		)

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		return this.database.transaction(async (transaction) => {
			const [error, [queryResult]] = await promiseErrorHandler(
				this.database.query(QUERY_CULTURAL_PROFILE_RAND(length), {
					transaction,
				})
			)

			if (error) return right(error)

			const profiles = await Promise.all([
				...queryResult.map(generateCulturalProfile),
			])

			await SetterCache.execute(
				'::random-profile-culture-home',
				JSON.stringify(profiles),
				DAY
			)

			return left(profiles)
		})
	}

	async findSearch(search: string): PromiseEither<ICulturalProfile[], Error> {
		const cacheOrErr = await GetterCache.execute(
			`::search-profile-culture-home::${search}`
		)

		if (cacheOrErr.isLeft()) {
			return left(JSON.parse(cacheOrErr.value))
		}

		return this.database.transaction(async (transaction) => {
			const [error, [profiles]] = await promiseErrorHandler(
				this.database.query(QUERY_CULTURAL_PROFILE_SEARCH(search), {
					transaction,
				})
			)

			if (error) return right(error)

			const profilesArray = await Promise.all([
				...profiles.map(generateCulturalProfile),
			])

			await SetterCache.execute(
				`::search-profile-culture-home::${search}`,
				JSON.stringify(profilesArray),
				DAY
			)

			return left(profilesArray)
		})
	}
}
