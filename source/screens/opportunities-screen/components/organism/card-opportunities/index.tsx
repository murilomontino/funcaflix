import React, { useMemo } from 'react'

import { GetterProjects } from '@/domain/entities'

import AboutDescription from '@/components/molecule/card-about-description'
import CardBasicInformation from '@/components/molecule/card-basic-information'
import FooterCard from '../../molecules/footer-card'

import Card from '@/components/molecule/card'

import { ContainerInformation, ContainerDate, Text } from './styles'

type Props = {
  item: GetterProjects
}

const CardOpportunities = ({ item }: Props) => {

  const dateStartFormatted = new Date(item.dateStart).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  const dateEndFormatted = new Date(item.dateEnd).toLocaleDateString('pt-BR', { timeZone: 'UTC' })

  return (
    <Card
      endpoint='project'
      item={item}
    >
      <CardBasicInformation title={item.nameProject} >
        <ContainerInformation>
          <ContainerDate>
            <Text>Data de Inicio:</Text>
            <Text>{dateStartFormatted}</Text>
          </ContainerDate>
          <ContainerDate>
            <Text>Data de Fim:</Text>
            <Text>{dateEndFormatted}</Text>
          </ContainerDate>
        </ContainerInformation>
      </CardBasicInformation>
      <AboutDescription about={item.aboutProject} />
      <FooterCard item={item} />
    </Card>
  )
}

export default CardOpportunities
