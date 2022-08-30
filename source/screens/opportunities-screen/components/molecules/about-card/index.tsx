import React, { useMemo } from 'react'

import { GetterProjects } from '@/domain/entities'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: justify;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

type Props = {
  item: GetterProjects
}

const BookSinopse = ({ item }: Props) => {
  const { aboutProject } = item

  const about = useMemo(
    () =>
      (item.aboutProject || '')
        .replace(/(<([^>]+)>)/gi, '')
        .substring(0, 750)
        .concat('...'),
    [aboutProject]
  )

  return (
    <Container>
      <Text>{about}</Text>
    </Container>
  )
}

export default BookSinopse
