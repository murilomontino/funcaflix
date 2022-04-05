import React, { useEffect, useState } from 'react'

import Arrow from './arrow.svg'
import css from './styles.module.css'

const options = [
  {
    value: '0',
    label: 'Select an option',
  },
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
  },
]

type Option = {
  value: string
  label: string
}

const SelectDropdown = () => {
  const [selectState, setSelectState] = useState('0')

  useEffect(() => {
    console.log(selectState)
  }, [selectState])

  const OptionSelected = ({ value, label }: Option) => {
    return (
      <div className={css['select-box__value']}>
        <input
          className={css['select-box__input']}
          type="radio"
          value={value}
          defaultChecked={selectState === value ? true : false}
        />
        <p className={css['select-box__input-text']}>{label}</p>
      </div>
    )
  }

  const Options = ({ value, label }: Option) => (
    <li onClick={() => setSelectState(value)}>
      <label className={css['select-box__option']} aria-hidden>
        {label}
      </label>
    </li>
  )

  return (
    <div className={css['select-box']}>
      <div className={css['select-box__current']} tabIndex={2}>
        {options.map((option, index) => (
          <OptionSelected key={index} value={option.value} label={option.label} />
        ))}
        <img
          className={css['select-box__icon']}
          src={Arrow as never}
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className={css['select-box__list']}>
        {options.map((option, index) => (
          <Options key={index} value={option.value} label={option.label} />
        ))}
      </ul>
    </div>
  )
}

export default SelectDropdown
