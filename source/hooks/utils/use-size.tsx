import { useMemo } from 'react'
import { Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import theme from '@/theme'

export const useSize = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()

  const { width, height } = web ? window : screen

  const SCREEN_SMALLER_THAN_LARGE_SIZE = useMemo(
    () => width < theme.CONSTANTS.SCREEN.LARGE,
    [width]
  )

  const size = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  )

  const SCREEN_SMALLER_THAN_MEDIUM_SIZE = useMemo(
    () => width < theme.CONSTANTS.SCREEN.MEDIUM,
    [width]
  )

  return {
    size,
    web,
    SCREEN_SMALLER_THAN_LARGE_SIZE,
    SCREEN_SMALLER_THAN_MEDIUM_SIZE,
  }
}
