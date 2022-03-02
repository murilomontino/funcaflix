import React from 'react'
import { Text } from 'react-native'

import PdfViewer from '@/components/organism/pdf-viewer'

import { Container } from './styles'

type Props = {
  id: string
}

const ScreenBookID = ({ id }: Props) => {
  return (
    <Container>
      <Text style={{ color: 'white' }}>{id}</Text>
      <PdfViewer id={id?.toString()} />
    </Container>
  )
}

export default ScreenBookID
