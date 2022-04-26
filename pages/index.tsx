// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'

import TemplateFrontEnd from '@/components/templates/frontend'

import background from '@/assets/background-image.png'

export default function App() {
  return (
    <TemplateFrontEnd>
      <View style={{ minHeight: 420, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>
          Welcome to Expo + Next.js + Docker + Git SubModules + Docker-Compose Server 👋
        </Text>
        <Image
          resizeMode="cover"
          source={{ uri: background }}
          style={{ width: 200, height: 200 }}
        />
      </View>
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
    color: '#f2f2f2',
  },
})
