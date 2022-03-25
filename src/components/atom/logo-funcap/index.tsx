import React, { memo, useEffect, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Link from 'next/link'

import LogoFuncapImg from '@/assets/logo-funcap.png'

import 'react-loading-skeleton/dist/skeleton.css'
type Props = {
  size: number
}

const LogoFuncap: React.FC<Props> = ({ size }) => {
  const [loading, setLoading] = useState(true)

  const fontSize = useScaledSize(size)
  const link = 'https://www.funcap.se.gov.br/'

  const [logo, setLogo] = useState(LogoFuncapImg)

  useEffect(() => {
    return () => {
      setLogo(null)
    }
  }, [])

  return (
    <TouchableOpacity>
      <Link href={link}>
        <Image
          source={{
            uri: logo,
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
