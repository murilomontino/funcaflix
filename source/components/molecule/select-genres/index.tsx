import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import { EnumCategory } from '@/types/map-dropdown'

import MultiSelectTextInput from '../multi-select-text-input'
import genresBooks from './items/genres-books'
import genresMusics from './items/genres-musics'
import { Container, Title, Legends } from './styles'

type Props = {
	values: string[]
	onChangeValues: (values: string[]) => void
	category: EnumCategory
}

const SelectGenres = ({ onChangeValues, values, category }: Props) => {
	if (category != EnumCategory.Book && category != EnumCategory.Audio) {
		return (
			<MultiSelectTextInput
				values={values}
				onChangeValues={onChangeValues}
				title="Gêneros"
			/>
		)
	}

	const [selectedOption, setSelectedOption] = useState([])
	const [options, setOptions] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		if (category == EnumCategory.Book) {
			setOptions(genresBooks)
		} else if (category == EnumCategory.Audio) {
			setOptions(genresMusics)
		}
		setIsLoading(false)
	}, [category])

	useEffect(() => {
		setSelectedOption(() =>
			values.map((item) => ({ value: item, label: item }))
		)
	}, [values])

	const handleChange = (selectedOption) => {
		const items = selectedOption.map((item) => item.label)
		setSelectedOption(selectedOption)
		onChangeValues?.(items)
	}

	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<Container style={{ width: 400 }}>
			<Title>Generos:</Title>
			<Legends>Gêneros são gerados apos serem selecionados!</Legends>
			<Select
				options={options}
				isMulti
				onChange={handleChange}
				value={selectedOption}
				placeholder={`Adicionar Genero`}
			/>
		</Container>
	)
}

export default SelectGenres
