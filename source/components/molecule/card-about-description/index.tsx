import React, { useMemo } from 'react'

import styled from 'styled-components'
import colors from '@/global/colors'

const Text = styled.p`
  font-size: 16px;
  color: ${colors.grey20};
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
  text-align: justify;
  font-family: Helvetica, sans-serif;
  line-height: 18px;
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 750ch;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

type Props = {
  about: string
}

const AboutDescription = ({ about }: Props) => {
  
  const elipses = about.length > 1000 ? '...' : ''

  const aboutMemo = useMemo(
    () =>
      (about || 'Sem descrição')
        .replace(/(<([^>]+)>)/gi, '')
        .slice(0, 1000)
        .trim()
        .concat(elipses),
    [about]
  )

  return (
    <Container>
      <Text>{aboutMemo}</Text>
    </Container>
  )
}

export default AboutDescription
