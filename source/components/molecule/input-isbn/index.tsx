import React, { useCallback, useEffect, useState } from 'react'

import { GetterBooks } from '@/types'

import InputTopicMasked from '@/components/molecule/input-topic-masked'
import { maskDate } from '@/components/molecule/input-topic-masked/mask'

import api from '@/services'
import { Getter } from '@/services/config/types'

import useDebounce from '@/hooks/utils/use-debounce'

interface Props {
  requered?: boolean
  value?: string
  onChangeText?: (value: string) => void
  onChangeNumberOfPages?: (value: number) => void
  onChangePublishedDate?: (value: string) => void
  onChangePublisher?: (value: string) => void
  onChangeCulturalName?: (value: string) => void
  onChangeSynopsis?: (value: string) => void
  onChangeTitle?: (value: string) => void
  onChangeSubTitle?: (value: string) => void
  onChangeImageURL?: (value: string) => void
  textAlign?: 'left' | 'center' | 'right'
}

const InputISBN = ({
  requered = true,
  textAlign = 'left',
  onChangeText,
  value,
  onChangeCulturalName,
  onChangeImageURL,
  onChangeNumberOfPages,
  onChangePublishedDate,
  onChangePublisher,
  onChangeSynopsis,
  onChangeTitle,
  onChangeSubTitle,
}: Props) => {
  const [isbn, setISBN] = useState(value)

  useEffect(() => {
    setISBN(value)
  }, [value])

  // Função de efeito atraso em funções -------------------------------------------
  const debounce = useDebounce()

  // Corrige a data para o formato local ------------------------------------------
  const publishedDateLocale = (publishedDate: string) => {
    if (publishedDate) {
      const date = new Date(publishedDate).toLocaleDateString()
      return maskDate(date)
    }
    return ''
  }

  // Função que faz a busca do livro na api do google books ------------------------
  const searchBook = useCallback(async (isbn: string) => {
    // Busca o livro no google books
    const response = await api.get<Getter<GetterBooks>>(`api-google-book/${isbn}`)

    const { data } = response

    // Caso ocorra um sucesso na busca do livro
    if (data.statusCode === 200) {
      const { data: volumeInfo } = data

      // Caso o livro já tenha sido adicionado anteriormente ao banco de dados
      if (volumeInfo.existDB) {
        return
      }

      // Caso o livro não tenha sido adicionado anteriormente ao banco de dados
      // mapa os dados do livro para o formato do banco de dados
      // ---------------------------------------------------------------

      onChangeSynopsis?.(volumeInfo.sinopse.slice(0, 1500))
      onChangeSubTitle?.(volumeInfo.subTitulo)
      onChangeTitle?.(volumeInfo.titulo)

      if (volumeInfo.image) {
        onChangeImageURL?.(volumeInfo.image)
      }

      onChangePublisher?.(volumeInfo.editora)
      onChangeNumberOfPages?.(volumeInfo.numero_de_paginas)

      const locale = publishedDateLocale(volumeInfo.data_de_publicacao)

      onChangePublishedDate(locale)
      onChangeCulturalName(volumeInfo.autor)

      return volumeInfo
    } else {
      return null
    }
  }, [])

  const onChangeSearch = (text: string) => {
    setISBN(text)
    onChangeText?.(text)
    debounce(async () => {
      const rawText = text.replaceAll('-', '')
      if (rawText.length === 13) {
        await searchBook(rawText)
      }
    }, 500)
  }

  return (
    <InputTopicMasked
      value={isbn}
      onChangeText={onChangeSearch}
      placeholder={'ISBN-13'}
      topic={'ISBN-13'}
      requered={requered}
      maxLength={14}
      mask={'isbn'}
      keyboardType={'numeric'}
      style={{ textAlign }}
    />
  )
}

export default InputISBN
