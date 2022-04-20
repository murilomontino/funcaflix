// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Image } from 'react-native'

import TemplateFrontEnd from '@/components/templates/frontend'

import background from '@/assets/background-image.png'

export default function App() {
  return (
    <TemplateFrontEnd>
      <Text style={styles.text}>Welcome to Expo + Next.js + Docker 👋</Text>
      <Image resizeMode="cover" source={{ uri: background }} style={{ width: 200, height: 200 }} />
    </TemplateFrontEnd>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
