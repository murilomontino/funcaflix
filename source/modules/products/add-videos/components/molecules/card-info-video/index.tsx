import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { mapFinancialResources } from '@/types'
import { cpf, cnpj } from 'cpf-cnpj-validator'

import ImageNext from '@/components/atom/image-next'

import { Container, Text, Title, ContainerThumbnail } from './styles'

const CardInfoVideo = ({ item }) => {
  const [image, setImage] = useState(item.thumbnail)

  useEffect(() => {
    setImage(item.thumbnail)

    return () => {
      setImage('')
    }
  }, [item])

  const FinancialResource = useMemo(
    () => mapFinancialResources.filter((resource) => resource.id === item.recurso)[0].recursos,
    [item.recurso]
  )

  const Thumbnail = useCallback(() => {
    const width = 250
    const height = 150

    return (
      <ContainerThumbnail width={width} height={height}>
        <ImageNext
          quality={75}
          url="videos/thumbnail?id="
          image={image}
          alt={item.titulo}
          unblur
          height={height}
          width={width}
        />
      </ContainerThumbnail>
    )
  }, [image, item])

  return (
    <Container>
      <Thumbnail />
      <Title>{item.titulo}</Title>
      <Text>{item.artista}</Text>
      <Text>{cpf.format(item.cpf) || cnpj.format(item.cnpj)}</Text>
      <Text>Recurso: {FinancialResource}</Text>
    </Container>
  )
}

export default CardInfoVideo
