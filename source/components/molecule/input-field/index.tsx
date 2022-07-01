/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ViewStyle, ImageStyle, TextStyle } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import { FieldAttributes, useField } from 'formik'

import HelperText from '@/components/atom/helper-text'

import { Container, ContainerIcon, TopicForm, TopicRequered, Field } from './styles'

type Props = {
  topic?: string
  requered?: boolean
  nameIcon?: string
  name: string
  styleViewInput?: TextStyle | ViewStyle | ImageStyle | ImageStyle[] | ViewStyle[] | TextStyle[]
} & FieldAttributes<any>

export const InputField = ({
  topic,
  requered = false,
  nameIcon,
  styleViewInput,
  ...rest
}: Props) => {
  const [inputProps, meta] = useField(rest)
  const id = rest.id || rest.name

  return (
    <Container>
      <div style={{ marginRight: '4px', marginTop: '8px' }}>
        <TopicForm>{topic}</TopicForm>
        {requered && <TopicRequered>*</TopicRequered>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Field id={id} {...inputProps} {...rest} />
        {!!nameIcon && (
          <ContainerIcon style={[styleViewInput, { borderLeftWidth: 0 }]}>
            <FontAwesome name={nameIcon as any} size={14} />
          </ContainerIcon>
        )}
      </div>
      <div style={{ position: 'absolute', marginTop: '8px', width: '100%', bottom: '-10px' }}>
        {meta.touched && meta.error && <HelperText text={meta.error?.toString()} visible />}
      </div>
    </Container>
  )
}

export default InputField
