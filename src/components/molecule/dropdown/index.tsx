/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Dropdown, { Option } from 'react-dropdown'

import 'react-dropdown/style.css'

import { DropdownContainer, Label } from './styles'

type Props = {
  label?: string
  onChange: (value: string | number) => void
  value: string | number
  placeholder?: string
  options: {
    label: string
    value: string | number
  }[]
}

const DropdownComponent = ({
  label = 'Tipos',
  onChange,
  placeholder = 'Selecione',
  options,
  value,
}: Props) => {
  const [select, setSelect] = useState(() => {
    const find = options.find((option) => option.value === value)
    if (find) {
      return find
    }
    return {
      label: placeholder,
      value: null,
    }
  })

  const renderLabel = () => {
    return <Label>{label}</Label>
  }

  const onChangeDropdown = (option: Option) => {
    setSelect(option as any)
    onChange?.(option.value)
  }

  return (
    <DropdownContainer
      style={{
        minWidth: 250,
        maxWidth: 250,
      }}
    >
      {renderLabel()}
      <Dropdown
        menuClassName="dropdown-menu"
        options={options as any}
        onChange={onChangeDropdown}
        value={select.label}
        placeholder={placeholder}
      />
    </DropdownContainer>
  )
}

export default DropdownComponent
