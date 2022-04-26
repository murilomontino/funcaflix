import React from 'react'
import { View } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import HeaderLogo from '@/components/atom/header-logo'
import SkeletonHeadLogo from '@/components/atom/header-logo/skeleton'

import { ContainerBackground } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

const ComingSoonScreen = () => {
  const { isFontReady } = useResources()

  const WIDTH_NUMBER = 7
  const TEXT_NUMBER = 2

  const TEXT_SIZE = useScaledSize(TEXT_NUMBER)
  const WIDTH_LOGO = useScaledSize(WIDTH_NUMBER)

  return (
    <ContainerBackground>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isFontReady ? (
          <HeaderLogo widthLogo={WIDTH_NUMBER} textSize={TEXT_NUMBER} subTitle="EM BREVE" />
        ) : (
          <SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
        )}
      </View>
    </ContainerBackground>
  )
}

export default ComingSoonScreen
