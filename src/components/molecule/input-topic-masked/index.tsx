import React, { useCallback, useState } from 'react'
import { ViewStyle, TextStyle, ImageStyle, TextInputProps } from 'react-native'

import InputTopic from '../input-topic'
import { maskCNPJ, maskCEP, maskCPF, maskDate, maskCPFandCNPJ, maskISBN } from './mask'

type mask =
  | 'cnpj'
  | 'cpf'
  | 'phone'
  | 'cep'
  | 'date'
  | 'time'
  | 'money'
  | 'year'
  | 'cpfandcnpj'
  | 'isbn'

type Props = {
  topic: string
  value: string
  requered?: boolean
  placeholder?: string
  maxLength?: number
  nameIcon?: string
  styleViewContainer?: ViewStyle | ViewStyle[]
  styleViewInput?: TextStyle | ViewStyle | ImageStyle | ImageStyle[] | ViewStyle[] | TextStyle[]
  styleTopic?: TextStyle | TextStyle[]
  mask: mask
  textAlign?: 'left' | 'center' | 'right'
  type?: string
  onChangeText: (text: string, rawText: string) => void
} & TextInputProps

const InputTopicMasked = ({
  mask,
  styleViewContainer,
  topic,
  value,
  requered = false,
  styleViewInput,
  nameIcon,
  styleTopic,
  onChangeText,
  placeholder,
  textAlign = 'left',

  ...rest
}: Props) => {
  const [text, setText] = useState(value)

  const handleMask = (text: string) => {
    switch (mask) {
      case 'cnpj':
        return maskCNPJ(text)
      case 'cpf':
        return maskCPF(text)
      case 'cpfandcnpj':
        return maskCPFandCNPJ(text)
      case 'isbn':
        return maskISBN(text)
      case 'phone':
        return text
      case 'cep':
        return maskCEP(text)
      case 'date':
        return maskDate(text)
      default:
        return text
    }
  }

  const handleTextMask = useCallback((text: string) => {
    const masked = handleMask(text)
    setText(masked)
    onChangeText(masked, masked)
  }, [])

  return (
    <InputTopic
      {...rest}
      topic={topic}
      requered={requered}
      value={text}
      nameIcon={nameIcon}
      onChangeText={handleTextMask}
      placeholder={placeholder}
      styleViewContainer={styleViewContainer}
      styleViewInput={[styleViewInput as unknown, { textAlign }]}
      styleTopic={styleTopic}
      keyboardType="numbers-and-punctuation"
    />
  )
}

export default InputTopicMasked
