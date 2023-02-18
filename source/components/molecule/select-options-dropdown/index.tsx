import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import HelperText from '@/components/atom/helper-text'
import SelectDropdown from '@/components/atom/select-dropdown'

import api from '@/services'
import { Getter } from '@/services/config/types'

type mimetype =
	| 'image/jpeg'
	| 'image/jpeg'
	| 'image/png'
	| 'application/pdf'
	| 'video/*'
	| 'audio/*'

type Option = {
	label: string
	value: string | number
}

type Props = {
	optionsDefault?: Option[]
	values: string | number
	mimetype?: mimetype
	onChange: (value: string | number) => void
	label: string
	type: number
	visible?: boolean
	message?: string
}

const SelectOptionsDropdown = ({
	values,
	onChange,
	label,
	type,
	message,
	mimetype,
	optionsDefault,
	visible = false,
}: Props) => {
	const [options, setOptions] = useState<Option[]>([])
	const [loading, setLoading] = useState(true)

	const fetchOptions = async (type) => {
		if (type === 0) {
			setOptions([])
			setLoading(false)
			return
		}

		const { data } = await api.get<Getter<Option[]>>(`options`, {
			params: {
				type,
			},
		})
		if (data.statusCode === 200) {
			const filteredOptions = filteredOptionsMimeType(data.data)
			setOptions(filteredOptions)
		} else {
			setOptions([])
		}

		setLoading(false)
	}

	const filteredOptionsMimeType = (options: Option[]) => {
		/*  (14, 'Documento', 10),
      (15, 'Link', 10),
      (16, 'Foto de Artista', 10),
      (17, 'Foto de Evento', 10),
      (18, 'Foto de Local', 10); 
      */
		if (type !== 10) {
			return options
		}

		return options.filter((option) => {
			if (mimetype.includes('image')) {
				return option.value === 16 || option.value === 17 || option.value === 18
			}

			if (mimetype.includes('video')) {
				return option.value === 14
			}

			if (mimetype.includes('audio')) {
				return option.value === 14
			}

			if (mimetype.includes('pdf')) {
				return option.value === 14
			}

			return false
		})
	}

	useEffect(() => {
		setLoading(true)

		if (options.length === 0) {
			onChange(0)
		} else if (options.length === 1) {
			onChange(options[0].value)
		} else {
			onChange(0)
		}
		setLoading(false)
	}, [options])

	useLayoutEffect(() => {
		if (type !== 99) {
			fetchOptions(type)
		} else {
			setOptions(optionsDefault)
		}
	}, [type, optionsDefault])

	if (loading) {
		return <ActivityIndicator />
	}

	return (
		<div
			style={{
				position: 'relative',
				paddingBottom: 24,
			}}
		>
			<SelectDropdown
				value={values}
				options={options}
				onChangeSelect={onChange}
				labelDefault={label}
			/>
			<div
				style={{
					zIndex: 10,
					position: 'absolute',
					bottom: 0,
					width: '400px',
					left: -100,
				}}
			>
				{visible && message && <HelperText text={message} visible />}
			</div>
		</div>
	)
}

export default SelectOptionsDropdown
