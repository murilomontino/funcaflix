// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'

import Header from '@/components/organism/header'

import background from '@/assets/background-image.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Image
        resizeMode="cover"
        source={{ uri: background }}
        style={{ width: 200, height: 200 }}
      />
    </View>
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
