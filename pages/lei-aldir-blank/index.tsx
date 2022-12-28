import React from 'react'

import type { GetStaticProps } from 'next'

import { FindAllOpportunities, FindAllProductsByCategory } from '@/domain/usecases'

import { build } from 'mapacultural-database'
import LeiAldirBlankScreen from '@/screens/lei-aldir-blank-screen'
import HeaderLogo from '@/components/molecule/header-logo'
import { CATEGORIES } from '@/types/constants'
import { IGetterProduct } from '@/types/getters'
import { GetterProjects } from '@/domain/entities'

type StaticProps = {
    staticBooks: IGetterProduct[]
    staticTvProgramsPlaylist: IGetterProduct[]
    staticOpportunities: GetterProjects[]
    staticWorkshops: IGetterProduct[]
    staticEvents: IGetterProduct[]
    staticParticipation: IGetterProduct[]
}

const LeiAldirBlank = ({
    staticBooks,
    staticOpportunities,
    staticEvents,
    staticParticipation,
    staticTvProgramsPlaylist,
    staticWorkshops
}: StaticProps) => {
    return (
        <>
            <div className="my-2" >
                <HeaderLogo />
            </div>
            <LeiAldirBlankScreen
                opportunities={staticOpportunities}
                books={staticBooks}
                events={staticEvents}
                participation={staticParticipation}
                tvProgramsPlaylist={staticTvProgramsPlaylist}
                workshops={staticWorkshops}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    await build()

    const promiseBooksOrErr = new FindAllProductsByCategory().execute({}, {
        category: CATEGORIES.LITERATURE,
        where: {
            financialResource: 61,
        }
    })

    const promiseWorkshopsOrErr = new FindAllProductsByCategory().execute({}, {
        category: CATEGORIES.WORKSHOP,
        where: {
            financialResource: 61,
        }
    })

    const promiseEventsOrErr = new FindAllProductsByCategory().execute({}, {
        category: CATEGORIES.EVENT,
        where: {
            financialResource: 61,
        }
    })

    const promiseParticipationOrErr = new FindAllProductsByCategory().execute({}, {
        category: CATEGORIES.PARTICIPATION,
        where: {
            financialResource: 61,
        }
    })

    const promiseOpportunitiesOrErr = new FindAllOpportunities().execute({
        status: [1, 2],
        params: {
            where: {
                idUser: 12110,
            }
        }
    })


    const promiseAudioVisualOrErr = new FindAllProductsByCategory().execute({}, {
        category: CATEGORIES.AUDIOVISUAL,
        limit: 10,
        where: {
            financialResource: 61,
        }
    })

    const [
        booksOrErr,
        playlistOrErr,
        opportunitiesOrErr,
        workshopsOrErr,
        eventsOrErr,
        participationOrErr,
    ] = await Promise.all([
        promiseBooksOrErr,
        promiseAudioVisualOrErr,
        promiseOpportunitiesOrErr,
        promiseWorkshopsOrErr,
        promiseEventsOrErr,
        promiseParticipationOrErr,
    ])

    const books = booksOrErr.isLeft() && booksOrErr.extract()
    const playlist = playlistOrErr.isLeft() && playlistOrErr.extract()
    const opportunities = opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()
    const workshops = workshopsOrErr.isLeft() && workshopsOrErr.extract()
    const events = eventsOrErr.isLeft() && eventsOrErr.extract()
    const participation = participationOrErr.isLeft() && participationOrErr.extract()

    return {
        props: {
            staticBooks: books || [],
            staticTvProgramsPlaylist: playlist || [],
            staticOpportunities: opportunities || [],
            staticWorkshops: workshops || [],
            staticEvents: events || [],
            staticParticipation: participation || [],
        },
        revalidate: 60 * 60 * 24,
    }
}


export default LeiAldirBlank