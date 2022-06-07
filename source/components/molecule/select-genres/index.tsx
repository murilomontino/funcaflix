import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import items from './items'
import { Container, Title, Legends } from './styles'

type Props = {
  values: string[]
  onChangeValues: (values: string[]) => void
}

const SelectGenres = ({ onChangeValues, values }: Props) => {
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    setSelectedOption(values)
  }, [values])

  const handleChange = (selectedOption) => {
    const items = selectedOption.map((item) => item.label)
    setSelectedOption(items)
    onChangeValues?.(items)
  }

  return (
    <Container>
      <Title>Generos:</Title>
      <Legends>Gêneros são gerados apos serem selecionados!</Legends>
      <Select options={items} isMulti onChange={handleChange} />
    </Container>
  )
}

export default SelectGenres
