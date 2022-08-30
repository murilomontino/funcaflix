import React, { useMemo } from 'react'
import { View } from 'react-native'

import { GetterProjects } from '@/domain/entities'
import DefaultImg from '@/public/brasao_governo-sergipe.webp'

import Img from '@/components/atom/image'

import AboutCard from '../../molecules/about-card'
import BasicInformationCard from '../../molecules/basic-information-card'
import FooterCard from '../../molecules/footer-card'
import { viewStyles } from '../../styles'
import { Card } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  item: GetterProjects
}

const CardOpportunities = ({ item }: Props) => {
  const { size } = useSize()
  const { dateEnd, dateStart } = item

  const color = useMemo(() => {
    if (new Date(dateEnd) < new Date()) return '#FF0000'
    if (new Date(dateStart) > new Date()) return '#FFA500'
    return '#008000'
  }, [dateEnd, dateStart])

  return (
    <Card color={color}>
      <View
        style={
          (viewStyles.viewContainerImage,
          size.width < 640 && {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })
        }
      >
        <Img image={DefaultImg} width={250} height={'100%'} staticImage />
      </View>
      <View style={[viewStyles.viewDetails]}>
        <BasicInformationCard item={item} />
        <AboutCard item={item} />
        <FooterCard item={item} />
      </View>
    </Card>
  )
}

export default CardOpportunities
