import React, { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { AntDesign } from 'react-web-vector-icons'

import theme from '@/theme'

import { Container, ContainerIcon, Title } from './styles'

type Props = {
  onPress?: () => void
  isOpen: boolean
  onChangeOpen: (isOpen: boolean) => void
  title: string
} & TouchableOpacityProps

const ToggleWindow = ({ onPress, onChangeOpen, isOpen, title }: Props) => {
  const [value, setValue] = useState(isOpen)

  const toggle = () => {
    onChangeOpen(!isOpen)
    setValue(!isOpen)
    onPress?.()
  }

  const renderIcon = () => (
    <ContainerIcon>
      <AntDesign name={value ? 'up' : 'down'} size={16} color={theme.COLORS.TEXT} />
    </ContainerIcon>
  )

  return (
    <Container onPress={toggle}>
      <Title>{title}</Title>
      {renderIcon()}
    </Container>
  )
}

export default ToggleWindow
