/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MutableRefObject, useCallback, useEffect, useMemo, useState } from 'react'
import { ViewStyle, TextInputProps, ImageStyle, TextStyle } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import Topic from '@/components/atom/topic'

import { Container, Input, ContainerIcon } from './styles'

import colors from '@/global/colors'

type Props = {
  topic?: string
  value: string | MutableRefObject<string>
  requered?: boolean
  nameIcon?: string
  maxWidthTitle?: number | string
  width?: number | string
  maxLength?: number
  stylesViewTitle?: ViewStyle | ViewStyle[]
  styleViewContainer?: ViewStyle | ViewStyle[]
  styleViewInput?: TextStyle | ViewStyle | ImageStyle | ImageStyle[] | ViewStyle[] | TextStyle[]
  styleTopic?: TextStyle | TextStyle[]
  textAlign?: 'left' | 'center' | 'right'
  onChangeText: (text: string) => void
} & Omit<TextInputProps, 'value'>

export const InputTopic = ({
  styleViewContainer,
  topic,
  value,
  requered = false,
  nameIcon,
  maxLength,
  styleViewInput,
  styleTopic,
  onChangeText,
  placeholder,
  textAlign = 'left',
  maxWidthTitle = 150,
  onFocus,
  onBlur,
  ...rest
}: Props) => {
  const [borderFocus, setBorderFocus] = useState(false)
  const toggleBorderFocus = () => {
    setBorderFocus((state) => !state)
  }
  const [valueText, setValueText] = useState<string>(() => {
    if (typeof value === 'string') {
      return value
    }

    return value?.current
  })

  useEffect(() => {
    if (typeof value === 'string') {
      setValueText(value)
    } else {
      setValueText(value?.current)
    }
  }, [value])

  const onChangeValueText = useCallback((text: string) => {
    setValueText(text)
    onChangeText(text)
  }, [])

  const border = useMemo(() => {
    const borderWidth = borderFocus ? 2 : 1

    if (borderFocus) {
      return {
        borderWidth,
        borderColor: 'orange',
      }
    } else {
      return {
        borderWidth: 1,
        borderColor: colors.grey20,
      }
    }
  }, [borderFocus])

  const renderTopic = () => {
    if (!topic) {
      return null
    }

    return (
      <Topic topic={topic} requered={requered} style={styleTopic} maxWidthTitle={maxWidthTitle} />
    )
  }

  return (
    <Container style={[styleViewContainer]}>
      {renderTopic()}
      <Input
        {...rest}
        onFocus={onFocus || toggleBorderFocus}
        onBlur={onBlur || toggleBorderFocus}
        placeholder={placeholder || topic}
        value={valueText}
        onChangeText={onChangeValueText}
        maxLength={maxLength}
        style={[
          border,
          styleViewInput,
          {
            textAlign,
            outline: 'none',
            borderRightWidth: nameIcon ? 0 : border.borderWidth,
          },
        ]}
      />
      {!!nameIcon && (
        <ContainerIcon style={[border, styleViewInput, { borderLeftWidth: 0 }]}>
          <FontAwesome name={nameIcon as any} size={14} />
        </ContainerIcon>
      )}
    </Container>
  )
}

export default InputTopic
