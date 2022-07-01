import React from 'react'

import theme from '@/theme'
import { FontAwesome } from '@expo/vector-icons'
import { MotiView } from 'moti'

import { Warning } from './styles'

const MessageMotiView = () => {
  return (
    <>
      <MotiView
        from={{
          translateY: -200,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1500,
          delay: 100,
        }}
      >
        <FontAwesome name="arrow-up" color={theme.COLORS.TEXT} size={32} />
      </MotiView>
      <Warning>Selecione um Tipo para prosseguir</Warning>
    </>
  )
}

export default MessageMotiView
