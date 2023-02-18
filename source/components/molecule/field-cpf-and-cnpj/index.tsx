import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { cpf, cnpj } from 'cpf-cnpj-validator'

import HelperText from '@/components/atom/helper-text'

import InputTopic from '../input-topic'

import colors from '@/global/colors'
import useDebounce from '@/hooks/utils/use-debounce'

type Props = {
	value: string
	onChangeValue: (value: string) => void
	isValid?: boolean
	onChangeIsValid?: (isValid: boolean) => void
	topic: string
	viewTitle?: ViewStyle
	viewInput?: ViewStyle
	styleTopic?: ViewStyle
	viewContainer?: ViewStyle | ViewStyle[]
	topicForm?: TextStyle
	requered?: boolean
	textAlign?: 'left' | 'center' | 'right'
}

const FieldCPFandCNPJGeneric = ({
	topic,
	viewContainer,
	viewInput,
	styleTopic,
	value,
	onChangeValue,
	requered = true,
	isValid,
	textAlign = 'left',
	onChangeIsValid,
	...rest
}: Props) => {
	// EFEITOS VISUAIS

	const [isValidCPForCNPJ, setIsValidCPForCNPJ] = useState(isValid)
	const [borderFocus, setBorderFocus] = useState(false)
	const [field, setField] = useState(value)

	useEffect(() => {
		setIsValidCPForCNPJ(isValid)
	}, [isValid])

	useEffect(() => {
		setField(value)
	}, [value])

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
				onChangeIsValid?.(true)
				setIsValidCPForCNPJ(true)
			} else {
				onChangeIsValid?.(false)
				setIsValidCPForCNPJ(false)
			}
		}, 50)
	}

	const isValidMemo = useMemo(() => {
		return (
			(!isValidCPForCNPJ && field.length === 14) ||
			(!isValidCPForCNPJ && field.length === 18)
		)
	}, [isValidCPForCNPJ, field])

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
			if (isValidCPForCNPJ) {
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
	}, [isValidCPForCNPJ, borderFocus, field])

	return (
		<>
			<InputTopic
				{...rest}
				value={field}
				placeholder={topic}
				styleTopic={[styleTopic]}
				topic={topic}
				requered={requered}
				onFocus={toggleBorderFocus}
				onBlur={toggleBorderFocus}
				nameIcon={isValidCPForCNPJ ? 'check' : 'close'}
				maxLength={18}
				styleViewContainer={viewContainer}
				mask={field.length < 14 ? '999.999.999-99' : '99.999.999/9999-99'}
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
