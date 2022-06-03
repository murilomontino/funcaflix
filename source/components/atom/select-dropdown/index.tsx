import React, { useEffect, useState } from 'react'

import Arrow from './arrow.svg'
import css from './styles.module.css'

type Props = {
  options: Option[]
  labelDefault?: string
  select?: number
  onChangeSelect?: (value: string | number) => void
}

type Option = {
  value: number | string
  label: string
}

const SelectDropdown = ({
  labelDefault = 'Selecione uma opção',
  options = [],
  select = 0,
  onChangeSelect,
}: Props) => {
  const [selectState, setSelectState] = useState<string | number>(0)

  useEffect(() => {
    setSelectState(select)
  }, [select])

  const optionsList: Option[] = [
    {
      value: 0,
      label: labelDefault,
    },
    ...options,
  ]

  const OptionSelected = ({ value, label }: Option) => {
    return (
      <div className={css['select-box__value']}>
        <input
          className={css['select-box__input']}
          type="radio"
          value={value}
          defaultChecked={selectState == value ? true : false}
        />
        <p className={css['select-box__input-text']}>{label}</p>
      </div>
    )
  }

  const Options = ({ value, label }: Option) => {
    const onClick = () => {
      onChangeSelect?.(value)
      setSelectState(value)
    }

    return (
      <li onClick={onClick}>
        <label className={css['select-box__option']} aria-hidden>
          {label}
        </label>
      </li>
    )
  }

  return (
    <div className={css['select-box']}>
      <div className={css['select-box__current']} tabIndex={2}>
        {optionsList.map((option, index) => (
          <OptionSelected key={index} value={option.value.toString()} label={option.label} />
        ))}
        <img
          className={css['select-box__icon']}
          src={Arrow as never}
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className={css['select-box__list']}>
        {optionsList.map((option, index) => (
          <Options key={index} value={option.value.toString()} label={option.label} />
        ))}
      </ul>
    </div>
  )
}

export default SelectDropdown
