import React from 'react'

import { CulturalProfileRepositorySequelize } from '@/domain/repositories'

import { build } from 'mapacultural-database'
import type { GetStaticProps } from 'next'
import removeAccentsAndJoin from '@/helpers/strings-normalize'
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
            name: removeAccentsAndJoin(item)
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

    const profiles = await (async () => {
        if (cityOrSegmentTitleTypeOrErr.value.type === 'city') {
            return (await new CulturalProfileRepositorySequelize().findAllByWhereCity(name as string))
        }

        return (await new CulturalProfileRepositorySequelize().findAllByWhereSegment(name as string))
    })()

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
