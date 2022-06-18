import React from 'react'

import PdfViewer from '@/components/organism/pdf-viewer'

import InfoBook from './organism/info-book'
import { Container } from './styles'

type Props = {
  book: {
    [key: string]: any
    pdf: string
  }
}

const ScreenBookID = ({ book }: Props) => {
  if (!book) return null

  return (
    <Container>
      {book?.pdf && <PdfViewer id={book?.pdf} />}
      <InfoBook book={book} />
    </Container>
  )
}

export default ScreenBookID
