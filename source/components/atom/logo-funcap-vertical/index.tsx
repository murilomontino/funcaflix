import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Image from 'next/image'

type Props = {
  size: number
}
const LOGO = '/logo-funcap-vertical.png'
const LINK = 'https://www.funcap.se.gov.br/'

const LogoFuncap: React.FC<Props> = ({ size }) => {
  const fontSize = useScaledSize(size)

  return (
    <a href={LINK} style={{ textDecoration: 'none' }}>
      <TouchableOpacity>
        <Image src={LOGO} width={fontSize} height={fontSize} alt="Logo Funcap" />
      </TouchableOpacity>
    </a>
  )
}

export default memo(LogoFuncap)
