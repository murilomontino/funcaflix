import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import theme from '@/theme'
import { MotiImage } from 'moti'
import Link from 'next/link'

import LogoFuncapImg from '@/assets/logo-funcap.png'

import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  size: number
}

const LogoFuncap: React.FC<Props> = ({ size }) => {
  const fontSize = useScaledSize(size)
  const link = 'https://www.funcap.se.gov.br/'

  return (
    <TouchableOpacity>
      <Link href={link}>
        <MotiImage
          transition={{
            type: 'timing',
            delay: theme.EFFECT.DELAY,
            duration: theme.EFFECT.DURATION - 50,
          }}
          source={{
            uri: LogoFuncapImg,
          }}
          resizeMode="contain"
          animate={{
            width: fontSize,
            height: fontSize,
          }}
        />
      </Link>
    </TouchableOpacity>
  )
}

export default memo(LogoFuncap)
