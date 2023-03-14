/* eslint-disable react/prop-types */
// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import { BookRepositorySequelize } from '@/domain/repositories'
import { FindAllBooksUseCase } from '@/domain/usecases'
import type { IGetterBooks } from '@/types/getters'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/atom/loading'
import ScreenBooks from '@/screens/books-screen'

type Props = {
	books: IGetterBooks[]
}

export default function Literatura({ books }: Props) {
	if (!books) {
		return <Loading />
	}

	return (
		<React.Fragment>
			<ScreenBooks books={books} />
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	await build()

	const booksOrErr = await new FindAllBooksUseCase(
		new BookRepositorySequelize()
	).execute()

	const booksEntities = booksOrErr.isLeft() ? booksOrErr.extract() : []

	return {
		props: {
			books: booksEntities,
		},
		revalidate: 60 * 60 * 24,
	}
}
