import React from 'react'
import { View } from 'react-native'

import { useFormikContext } from 'formik'

import Button from '@/components/atom/button'

import { IFormValues } from '../../../type'
import BookContent from '../../molecules/book-content'

import { useSize } from '@/hooks/utils/use-size'

const Right = () => {
  const { web, size, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()

  const { values, isValid } = useFormikContext<IFormValues>()

  const onHandleSubmit = () => {
    console.log(values)
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_SMALLER_THAN_LARGE_SIZE ? size.width : 300,
      }}
    >
      <BookContent />
      <Button onPress={onHandleSubmit} text="Enviar Livro" disabled={!isValid} />
    </View>
  )
}

export default Right
