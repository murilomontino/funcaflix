import { useEffect, useState } from 'react'

import type { IGetterBooks } from '@/types/getters'

import PdfViewer from '@/components/organism/pdf-viewer'

import InfoBook from './organism/info-book'
import { Container } from './styles'

type Props = {
	book: IGetterBooks
}

const ScreenBookID = ({ book }: Props) => {
	const [pdf, setPDF] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	if (!book) return null

	useEffect(() => {
		if (book.pdf) {
			setPDF(book.pdf)
			setIsLoading(false)
		}
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<Container>
			<div>{book?.pdf && <PdfViewer id={pdf} />}</div>
			<InfoBook book={book} />
		</Container>
	)
}

export default ScreenBookID
