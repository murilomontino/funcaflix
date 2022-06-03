/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'
import { ViewStyle, ImageStyle, TextStyle } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import { FieldAttributes } from 'formik'

import Topic from '@/components/atom/topic'

import { Container, ContainerIcon, Input } from './styles'

import colors from '@/global/colors'

type Props = {
  topic?: string
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
} & FieldAttributes<any>

export const InputField = ({
  styleViewContainer,
  topic,
  name,
  requered = false,
  nameIcon,
  maxLength,
  styleViewInput,
  styleTopic,
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
        border={border}
        borderFocus={borderFocus}
        onFocus={onFocus || toggleBorderFocus}
        onBlur={onBlur || toggleBorderFocus}
        placeholder={placeholder || topic}
        name={name}
        maxLength={maxLength}
      />
      {!!nameIcon && (
        <ContainerIcon style={[border, styleViewInput, { borderLeftWidth: 0 }]}>
          <FontAwesome name={nameIcon as any} size={14} />
        </ContainerIcon>
      )}
    </Container>
  )
}

export default InputField
