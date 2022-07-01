import React from 'react'
import { View } from 'react-native'

import HelperText from '@/components/atom/helper-text'

type Props = {
  err: any[]
}

const SIZE_HELPER_TEXT_HEIGHT = 24

const CheckingErrs = ({ err }: Props) => {
  const createError = (error: any) => {
    if (typeof error === 'string') {
      return error
    }
    if (Array.isArray(error)) {
      return error.map((err) => createError(err))
    }

    if (typeof error === 'object') {
      return Object.values(error).join('\n')
    }
  }

  return (
    <View
      style={{
        flex: 1,
        maxHeight: err?.length * SIZE_HELPER_TEXT_HEIGHT,
      }}
    >
      {err?.length > 0 &&
        err.map((err, index) => (
          <HelperText
            text={createError(err)}
            key={index}
            visible
            textStyle={{
              padding: 4,
            }}
          />
        ))}
    </View>
  )
}

export default CheckingErrs
