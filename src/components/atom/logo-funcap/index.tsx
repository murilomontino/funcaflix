import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Link from 'next/link'

import LogoFuncapImg from '@/assets/logo-funcap.png'

type Props = {
  size: number
}

const LogoFuncap: React.FC<Props> = ({ size }) => {
  const fontSize = useScaledSize(size)
  const link = 'https://www.funcap.se.gov.br/'

  return (
    <TouchableOpacity>
      <Link href={link}>
        <Image
          source={{
            uri: LogoFuncapImg,
          }}
          style={{
            resizeMode: 'contain',
            width: fontSize,
            height: fontSize,
          }}
        />
      </Link>
    </TouchableOpacity>
  )
}

export default memo(LogoFuncap)
