// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { Text, View } from 'react-native'

import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ProfilePage() {
  const useRoute = useRouter()
  const { username } = useRoute.query

  return (
    <View style={{ minHeight: 420, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 16,
          color: '#f2f2f2',
        }}
      >
        Welcome to {username} 👋
      </Text>
      <Image src={'/background-image.png'} width={200} height={200} />
    </View>
  )
}
