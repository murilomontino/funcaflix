// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { Text, View } from 'react-native'

import Image from 'next/image'

import TemplateFrontEnd from '@/components/templates/frontend'

export default function App() {
  return (
    <TemplateFrontEnd>
      <View style={{ minHeight: 420, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: '#f2f2f2',
          }}
        >
          Welcome to Expo + Next.js + Docker + Git SubModules + Docker-Compose Server 👋
        </Text>
        <Image src={'/background-image.png'} width={200} height={200} />
      </View>
    </TemplateFrontEnd>
  )
}
