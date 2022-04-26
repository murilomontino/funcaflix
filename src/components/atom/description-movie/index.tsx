import React from 'react'

import { Text } from './styles'

type Props = {
  description: string
}

const DescriptionMovie = ({ description }: Props) => {
  return <Text>{description.slice(0, 255).replaceAll('\n', '').concat('...')}</Text>
}

export default DescriptionMovie
