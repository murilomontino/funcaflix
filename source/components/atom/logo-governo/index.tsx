import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

type Props = {
  size: number
  textVisible?: boolean
}

const LINK = 'https://www.se.gov.br/'

const LogoGoverno: React.FC<Props> = ({ size, textVisible = true }) => {
  const fontSize = useScaledSize(size)

  return (
    <a href={LINK} style={{ textDecoration: 'none' }}>
      <TouchableOpacity
        style={{
          width: fontSize - 75,
          height: fontSize - 25,
        }}
      ></TouchableOpacity>
    </a>
  )
}

export default LogoGoverno
