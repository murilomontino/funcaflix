import React from 'react'

import { CulturalProfileRepositorySequelize } from '@/domain/repositories'

import { build } from 'mapacultural-database'
import type { GetStaticProps } from 'next'
import { removeCharacterSpecialAndJoin } from '@/helpers/strings-normalize'
import { IGetterCulturalProfile } from '@/types/getters'
import CulturalProfilesNameScreen from '@/screens/cultural-profiles-names-screen'

type Props = {
    profiles: IGetterCulturalProfile[]
    title: string
}

const FilteredProfileCulture = ({ profiles, title }: Props) => {
    return (
        <CulturalProfilesNameScreen profiles={profiles} name={title} />
    )
}

export default FilteredProfileCulture

export const getStaticPaths = async () => {
    await build()

    const Repository = new CulturalProfileRepositorySequelize()

    const citiesOrErr = await Repository.findGroupByCity()
    const segmentsOrErr = await Repository.findGroupBySegment()

    if (citiesOrErr.isRight() || segmentsOrErr.isRight()) {
        return {
            paths: [],
        }
    }

    const paths = [...citiesOrErr.value, ...segmentsOrErr.value].map((item) => ({
        params: {
            name: removeCharacterSpecialAndJoin(item)
        },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    await build()
    const Repository = new CulturalProfileRepositorySequelize()

    const { name } = params

    const cityOrSegmentTitleTypeOrErr = await Repository.findCityOrSegmentName(name as string)

    if (cityOrSegmentTitleTypeOrErr.isRight()) {
        return {
            props: {
                profiles: [],
                title: 'Perfis Culturais'
            }
        }
    }

    const repository = new CulturalProfileRepositorySequelize()

    const profiles = cityOrSegmentTitleTypeOrErr.value.type === 'city' ?
        await repository.findAllByWhereCity(name as string) :
        await repository.findAllByWhereSegment(name as string)

    if (profiles.isRight()) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            profiles: profiles.value,
            title: cityOrSegmentTitleTypeOrErr.value.name,
        },
        revalidate: 60 * 60 * 24,
    }
}
