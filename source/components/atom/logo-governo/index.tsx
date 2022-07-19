import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Image from 'next/image'

type Props = {
  size: number
  textVisible?: boolean
}

const LINK = 'https://www.se.gov.br/'

const LogoGoverno: React.FC<Props> = ({ size, textVisible = true }) => {
  const [assets] = useState(['/governo-logo-ballon.png', '/governo-logo-sergipe.png'])

  const fontSize = useScaledSize(size)

  return (
    <a href={LINK} style={{ textDecoration: 'none' }}>
      <TouchableOpacity
        style={{
          width: fontSize,
          height: fontSize,
        }}
      >
        <Image src={assets[1]} layout="fill" objectFit="contain" alt="Logo do Governo" />
      </TouchableOpacity>
    </a>
  )
}

export default LogoGoverno
