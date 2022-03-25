import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { GetterBooks } from '@/types'
import { MotiView } from 'moti'

import CardBooks from './components/organism/card-book'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useSize } from '@/hooks/utils/use-size'

type Props = {
  books: GetterBooks[]
}

const ScreenBooks = ({ books }: Props) => {
  const [loading, setLoading] = useState(true)
  const { size } = useSize()

  useEffect(() => {
    if (books?.length > 0) {
      setLoading(false)
    }
  }, [books])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MotiView
        style={{
          width: size.width,
        }}
      ></MotiView>

      <FlatList
        style={{ marginBottom: 40, minHeight: 300 }}
        contentContainerStyle={{
          width: size.width,
        }}
        data={books}
        ListEmptyComponent={() => (
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                padding: 12,
                marginHorizontal: 20,
                marginVertical: 8,
                backgroundColor: colors.castGrey,
                elevation: 5,
                shadowColor: '#fff',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 4,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.whitePerCent._80,
              }}
            >
              Não há livros cadastrados
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          return <CardBooks item={item} />
        }}
        keyExtractor={(item, index) => `${item.id}`}
      />
    </View>
  )
}

export default ScreenBooks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: constants.headerHight,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
