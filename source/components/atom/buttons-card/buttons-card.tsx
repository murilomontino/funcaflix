import React from 'react'
import { StyleSheet } from 'react-native'

import theme from '@/theme'

import Button from '@/components/atom/button'

import { Container } from './styles'

type Props = {
  animated?: boolean
}

const ButtonsCard = ({ animated }: Props) => {
  return (
    <Container
      animate={{
        opacity: animated ? 1 : 0,
      }}
      transition={{
        type: 'timing',
        delay: theme.EFFECT.DELAY + 100,
        duration: theme.EFFECT.DURATION,
      }}
    >
      <Button text="Assistir" disabled={false} style={[styles.button]} textStyle={[styles.text]} />
      <Button text="Ver Mais" disabled={false} style={[styles.button]} textStyle={[styles.text]} />
    </Container>
  )
}

export default ButtonsCard

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: '40%',
    borderRadius: 20,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 12,
  },
})
