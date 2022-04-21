import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { cpf, cnpj } from 'cpf-cnpj-validator'

import HelperText from '@/components/atom/helper-text'

import InputTopicMasked from '../input-topic-masked'

import colors from '@/global/colors'
import useDebounce from '@/hooks/utils/use-debounce'

type Props = {
  value: string
  onChangeValue: (value: string) => void
  isValid: boolean
  onChangeIsValid: (isValid: boolean) => void
  topic: string
  viewTitle?: ViewStyle
  viewInput?: ViewStyle
  viewContainer?: ViewStyle | ViewStyle[]
  topicForm?: TextStyle
  requered?: boolean
  textAlign?: 'left' | 'center' | 'right'
}

const FieldCPFandCNPJGeneric = ({
  topic,
  viewContainer,
  viewInput,
  value,
  onChangeValue,
  requered = true,
  isValid,
  textAlign = 'left',
  onChangeIsValid,
  ...rest
}: Props) => {
  // EFEITOS VISUAIS

  const [borderFocus, setBorderFocus] = useState(false)
  const [field, setField] = useState(value)

  useEffect(() => {
    if (field) {
      handleChangeCPFandCNPJ(field)
    }
    return () => {
      setBorderFocus(false)
    }
  }, [])

  const toggleBorderFocus = () => {
    setBorderFocus((state) => !state)
  }

  // VERIFICAÇÃO DE CPF
  const debounce = useDebounce()

  const handleChangeCPFandCNPJ = (text: string) => {
    onChangeValue(text)
    setField(text)

    debounce(() => {
      if (cpf.isValid(text) || cnpj.isValid(text)) {
        onChangeIsValid(true)
      } else {
        onChangeIsValid(false)
      }
    }, 50)
  }

  const isValidMemo = useMemo(() => {
    return (!isValid && field.length === 14) || (!isValid && field.length === 18)
  }, [isValid, field])

  const msgError = useMemo(() => {
    if (field.length === 14 && 'CPF') {
      return 'CPF inválido, verifique se digitou corretamente'
    } else if (field.length === 18 && 'CNPJ') {
      return 'CNPJ inválido, verifique se digitou corretamente'
    } else {
      return ''
    }
  }, [field])

  const border = useMemo(() => {
    const borderWidth = borderFocus ? 2 : 1

    if (field.length === 14 || field.length === 18) {
      if (isValid) {
        return {
          borderWidth,
          borderColor: 'green',
        }
      } else {
        return {
          borderWidth,
          borderColor: '#ff0000',
        }
      }
    }
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
  }, [isValid, borderFocus, field])

  return (
    <>
      <InputTopicMasked
        value={field}
        placeholder={topic}
        topic={topic}
        requered={requered}
        onFocus={toggleBorderFocus}
        onBlur={toggleBorderFocus}
        nameIcon={isValid ? 'check' : 'close'}
        maxLength={18}
        styleViewContainer={viewContainer}
        mask={'cpfandcnpj'}
        onChangeText={handleChangeCPFandCNPJ}
        styleViewInput={[
          viewInput,
          {
            ...border,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            textAlign,
          },
        ]}
      />

      <HelperText text={msgError} visible={isValidMemo} />
    </>
  )
}

export default FieldCPFandCNPJGeneric

export const stylesDefault = StyleSheet.create({
  topicRequered: {
    fontWeight: 'bold',
    color: colors.redSecondary,
    fontSize: 18,
    textAlign: 'right',
    paddingLeft: 2,
  },
})
