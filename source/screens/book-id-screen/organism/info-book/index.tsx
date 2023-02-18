import React from 'react'

import Img from '@/components/atom/image-next'

import BookBasicInformation from '../../molecules/book-basic-information'
import BookFooter from '../../molecules/book-footer'
import BookSinopse from '../../molecules/book-sinopse'
import { Container, Details } from './styles'

type Props = {
	book: {
		[key: string]: any
	}
}

const InfoBook = ({ book }: Props) => {
	return (
		<Container>
			<Img
				image={book.thumbnail}
				width={400}
				height={600}
				alt={`Capa da Obra ${book.title}`}
			/>

			<Details>
				<BookBasicInformation title={book.title} subTitle={book.subTitle} />
				<BookSinopse text={book.synopsis} />
				<BookFooter author={book.author} />
			</Details>
		</Container>
	)
}

export default InfoBook
