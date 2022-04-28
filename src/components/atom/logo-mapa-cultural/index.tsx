import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Image from 'next/image'

const LOGO = '/logo-mapa-cultural.png'

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
          marginLeft: 12,
        }}
      >
        <Image src={LOGO} alt="Mapa Cultural" height={fontSize} width={fontSize} />
      </TouchableOpacity>
    </a>
  )
}

export default memo(LogoMapaCultural)
