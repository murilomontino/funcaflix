import React from 'react'

import Img from '@/components/atom/image-next'
import AboutDescription from '@/components/molecule/card-about-description'
import CardBasicInformation from '@/components/molecule/card-basic-information'

import BookFooter from '../../molecules/book-footer'
import { Container, Details } from './styles'

type Props = {
	book: {
		[key: string]: any
	}
}

const InfoBook = ({ book }: Props) => {
	return (
		<React.Fragment>
			<Container>
				<Img
					image={book.thumbnail}
					width={400}
					height={600}
					alt={`Capa da Obra ${book.title}`}
				/>

				<Details>
					<CardBasicInformation title={book.title} subTitle={book.subTitle} />
					<AboutDescription about={book.synopsis} clamp="clamp-all" />
					<BookFooter author={book.author} />
				</Details>
			</Container>
		</React.Fragment>
	)
}

export default InfoBook
