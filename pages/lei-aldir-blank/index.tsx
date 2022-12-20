import React from 'react'

import type { GetStaticProps } from 'next'

import { FindAllOpportunities, FindAllProductsByCategory } from '@/domain/usecases'

import { build } from 'mapacultural-database'
import LeiAldirBlankScreen from '@/screens/lei-aldir-blank-screen'
import HeaderLogo from '@/components/molecule/header-logo'

const LeiAldirBlank = ({
    staticBooks,
    staticOpportunities,
}) => {
    return (
        <>
            <div className="my-2" >
                <HeaderLogo />
            </div>
            <LeiAldirBlankScreen
                opportunities={staticOpportunities}
                books={staticBooks}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    await build()

    const promiseBooksOrErr = new FindAllProductsByCategory().execute({}, {
        category: '2',
        where: {
            financialResource: 61,
        }
    })

    const promiseOpportunitiesOrErr = new FindAllOpportunities().execute({
        status: [1, 2], params: {
            where: {
                idUser: 12110,
            }
        }
    })


    const promiseAudioVisualOrErr = new FindAllProductsByCategory().execute({}, {
        category: '1',
        limit: 10,
        where: {
            financialResource: 61,
        }
    })

    const [
        booksOrErr,
        playlistOrErr,
        opportunitiesOrErr,
    ] = await Promise.all([
        promiseBooksOrErr,
        promiseAudioVisualOrErr,
        promiseOpportunitiesOrErr
    ])

    const books = booksOrErr.isLeft() && booksOrErr.extract()
    const playlist = playlistOrErr.isLeft() && playlistOrErr.extract()
    const opportunities = opportunitiesOrErr.isLeft() && opportunitiesOrErr.extract()

    return {
        props: {
            staticBooks: books || [],
            staticTvProgramsPlaylist: playlist || [],
            staticOpportunities: opportunities || [],
        },
        revalidate: 60 * 60 * 24,
    }
}


export default LeiAldirBlank