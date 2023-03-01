import React, { KeyboardEventHandler, useState } from 'react'
import CreatableSelect from 'react-select/creatable'

import { Container, Legends, Title } from './styles'

const components = {
	DropdownIndicator: null,
}

interface Option {
	readonly label: string
	readonly value: string
}

type Props = {
	values: string[]
	onChangeValues: (values: string[]) => void
	title: string
}

const createOption = (label: string) => ({
	label,
	value: label,
})

const MultiSelectTextInput = ({
	title = 'Tags',
	onChangeValues,
	values,
}: Props) => {
	const [inputValue, setInputValue] = useState('')
	const [value, setValue] = useState<readonly Option[]>(() => {
		return values.map(createOption)
	})

	const handleInputChange = (newValue) => {
		setInputValue(newValue)
	}

	const handleChange = (newValue) => {
		setValue(newValue)
	}

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (!inputValue) return
		switch (event.key) {
			case 'Enter':
			case 'Tab':
				setInputValue('')
				setValue((state) => {
					const newValues = [...state, createOption(inputValue)]
					onChangeValues(newValues)
					return newValues
				})
				event.preventDefault()
		}
	}

	return (
		<Container style={{ width: 400 }}>
			<Title>{title}:</Title>
			<Legends>
				{title.toLowerCase()} são geradas automaticamente a partir do tab/enter
			</Legends>
			<CreatableSelect
				components={components}
				inputValue={inputValue}
				isClearable
				isMulti
				menuIsOpen={false}
				onChange={handleChange}
				onInputChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder={`Adicionar ${title}`}
				value={value}
			/>
		</Container>
	)
}

export default MultiSelectTextInput
