import { GetterProduct } from '@/domain/entities'
import { InvalidParamError, MissingParamError } from '@/domain/usecases/errors'
import {
	convertInArray,
	existItemsInArray,
	isValid,
	isValidID,
	verifiesCategories,
} from '@/helpers'
import promiseErrorHandler from '@/helpers/error-handler'
import { PromiseEither, left, right } from '@/shared/either'
import { CATEGORIES } from '@/types/constants'
import { IGetterProduct } from '@/types/getters'
import { db } from 'mapacultural-database'

import {
	IProductsRepository,
	categories,
} from './products-repository.interface'

function generateProduct(product: any): IGetterProduct {
	const productModel = product.get({ plain: true })
	return GetterProduct.build(productModel).params()
}

async function genericDBModelFindAll(where: object = {}, active = true) {
	return await db.ModelInfoProducts.findAll({
		where: {
			active,
			...where,
		},
		order: [['createdAt', 'ASC']],
		attributes: [
			'id',
			'title',
			'about',
			'thumbnail',
			'category',
			'link',
			'createdAt',
			'idUser',
		],
	})
}

export class SequelizeProductsRepository implements IProductsRepository {
	async findAllByFinancialResourceAndCategory(
		financialResource: number,
		category: CATEGORIES
	): PromiseEither<IGetterProduct[], Error> {
		const [err, model] = await promiseErrorHandler(
			genericDBModelFindAll({
				financialResource,
				category,
			})
		)

		if (err) {
			return right(err)
		}

		const products = model.map(generateProduct)
		return left(products)
	}

	async findAll(): PromiseEither<IGetterProduct[], Error> {
		const [err, model] = await promiseErrorHandler(genericDBModelFindAll({}))

		if (err) {
			return right(err)
		}

		const products = model.map(generateProduct)
		return left(products)
	}

	async findAllProductsByCategory(
		categories: categories
	): PromiseEither<IGetterProduct[], Error> {
		// Verifica se a categoria foi passada como parâmetro e se for um array, se ele não está vazio
		if (!isValid(categories) || !existItemsInArray(categories)) {
			return right(new MissingParamError({ parameter: 'categoria' }))
		}

		const treatmentCategories = convertInArray(categories) as string[]

		if (!verifiesCategories(treatmentCategories)) {
			return right(new InvalidParamError({ parameter: 'categoria' }))
		}

		const [err, model] = await promiseErrorHandler(
			genericDBModelFindAll({
				category: treatmentCategories,
			})
		)

		if (err) {
			return right(err)
		}

		const products = model.map(generateProduct)

		return left(products)
	}

	async findAllProductsByUser(
		idUser: number
	): PromiseEither<IGetterProduct[], Error> {
		if (isValidID(idUser)) {
			return right(new MissingParamError({ parameter: 'idUser' }))
		}

		const [err, model] = await promiseErrorHandler(
			genericDBModelFindAll({
				idUser,
			})
		)

		if (err) {
			return right(err)
		}

		const products = model.map(generateProduct)

		return left(products)
	}

	async findAllProductsByUserAndCategory(
		idUser: number,
		categories: categories
	): PromiseEither<IGetterProduct[], Error> {
		if (!isValidID(idUser))
			return right(new MissingParamError({ parameter: 'idUser' }))

		if (!isValid(categories)) {
			return right(new MissingParamError({ parameter: 'categoria' }))
		}

		const treatmentCategories = convertInArray(categories) as string[]

		if (
			!verifiesCategories(treatmentCategories) ||
			!existItemsInArray(treatmentCategories)
		) {
			return right(new InvalidParamError({ parameter: 'categoria' }))
		}

		const [err, model] = await promiseErrorHandler(
			genericDBModelFindAll({
				active: true,
				idUser: idUser,
				category: treatmentCategories,
			})
		)

		if (err) {
			return right(err)
		}

		const products = model.map(generateProduct)

		return left(products)
	}
}
