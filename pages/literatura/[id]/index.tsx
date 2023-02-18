import React from 'react'

import {
	FindOneBookByIdProductUseCase,
	FindAllBooksUseCase,
} from '@/domain/usecases'
import type { IGetterBooks } from '@/types/getters'
import { build } from 'mapacultural-database'
import { GetStaticProps } from 'next/types'

import Loading from '@/components/atom/loading'
import ScreenBookID from '@/screens/book-id-screen'

type Props = {
	book: IGetterBooks
}

const LiteraturaId = ({ book }: Props) => {
	if (!book) {
		return <Loading />
	}

	return <ScreenBookID book={book} />
}

export const getStaticPaths = async () => {
	await build()

	const booksOrErr = await new FindAllBooksUseCase().execute()

	if (booksOrErr.isRight()) {
		return {
			paths: [],
			fallback: false,
		}
	}

	const books = booksOrErr.extract()

	const paths = books.map((book) => ({
		params: { id: book.id?.toString() || -1 },
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	await build()

	const bookOrErr = await new FindOneBookByIdProductUseCase().execute(null, {
		id: params.id?.toString(),
	})

	const book = bookOrErr.isLeft() ? bookOrErr.extract() : null

	return {
		props: {
			book,
		},
		revalidate: 60 * 60 * 24,
	}
}

export default LiteraturaId
