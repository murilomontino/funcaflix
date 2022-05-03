import React, { useCallback, useEffect, useState } from 'react'

import Tag from '@/components/atom/tag'
import InputTopic from '@/components/molecule/input-topic'

import { Container, Title, Legends, ContainerTags } from './styles'

type Props = {
  tags: string[]
  width?: number | string
  onChangeTags: (tags: FunctionIndexers | string[]) => void
}

type FunctionIndexers = (tags: string[]) => void

const InputTags = ({ onChangeTags, tags, width }: Props) => {
  const [text, setText] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setSelectedTags(tags)
  }, [])

  // regex que detecta se a ponto ou virgula na string no final da frase
  const regex = /[.,]$/

  useEffect(() => {
    if (regex.test(text)) {
      onChangeAddTags(text.slice(0, -1))
      setText('')
    }
  }, [text])

  const onChangeAddTags = useCallback(
    (text: string) => {
      onChangeSelectedTags((state) => [...state, text])
      onChangeTags?.((state: string[]) => [...state, text])
    },
    [selectedTags]
  )

  const onChangeRemoveTags = useCallback(
    (index: number) => {
      onChangeSelectedTags((state: string[]) => state.filter((_, i) => i !== index))
      onChangeTags?.((state: string[]) => state.filter((_, i) => i !== index))
    },
    [selectedTags]
  )

  const onChangeSelectedTags = (fn: (state: string[]) => string[]) => {
    setSelectedTags(fn)
  }

  const data = selectedTags.map((tag, index) => (
    <Tag index={index} key={index} tag={tag} onChangeRemoveTags={onChangeRemoveTags} />
  ))

  return (
    <Container style={{ width }}>
      <Title>Tags:</Title>
      <Legends>As tags são geradas automaticamente a partir da virgula</Legends>
      <InputTopic onChangeText={setText} value={text} />
      <ContainerTags>{data}</ContainerTags>
    </Container>
  )
}

export default InputTags
