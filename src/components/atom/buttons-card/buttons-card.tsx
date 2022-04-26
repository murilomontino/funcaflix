import React from 'react'
import { StyleSheet } from 'react-native'

import Button from '@/components/atom/button'

import { Container } from './styles'

const ButtonsCard = () => {
  return (
    <Container>
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
