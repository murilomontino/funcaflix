import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import LogoMapaCulturalPNG from '@/assets/LogoMapaCultural.png'

const LogoMapaCultural: React.FC = () => {
  const fontSize = useScaledSize(6)
  const link = 'https://funcap.mapacultural.se.gov.br/'

  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <TouchableOpacity
        style={{
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{ uri: LogoMapaCulturalPNG }}
          style={{
            resizeMode: 'contain',
            width: fontSize,
            height: fontSize,
            marginLeft: 20,
          }}
        />
      </TouchableOpacity>
    </a>
  )
}

export default memo(LogoMapaCultural)
