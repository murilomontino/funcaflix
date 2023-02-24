import React, {
	MutableRefObject,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { ViewStyle } from 'react-native'

import Topic from '@/components/atom/topic'

import { Container, TextLength, Input } from './styles'

type Props = {
	topic: string
	numberLines: number
	maxLength: number
	height: number
	placeholder?: string
	maxWidthTitle?: number | string
	value: string | MutableRefObject<string>
	requered?: boolean
	styleViewContainer?: ViewStyle | ViewStyle[]
	onChangeValue: (text: string) => void
	widthContainer?: number | string
}

const InputTextArea = ({
	topic,
	numberLines,
	maxLength = 5000,
	height,
	maxWidthTitle = '100%',
	styleViewContainer,
	placeholder,
	value,
	requered = false,
	onChangeValue,
}: Props) => {
	const [valueText, setValueText] = useState(() => {
		if (typeof value === 'string') {
			return value
		}

		return value?.current
	})

	useEffect(() => {
		if (typeof value === 'string') {
			setValueText(value)
		} else {
			setValueText(value?.current)
		}
	}, [value])

	const onChangeValueText = useCallback(
		(text: string) => {
			setValueText(text)
			onChangeValue(text)
		},
		[setValueText, onChangeValue]
	)

	return (
		<Container style={[styleViewContainer]}>
			{!!topic && (
				<Topic
					topic={topic}
					requered={requered}
					maxWidthTitle={maxWidthTitle}
				/>
			)}

			<Input
				value={valueText}
				placeholder={placeholder || topic}
				onChangeText={onChangeValueText}
				style={[
					{
						marginTop: '10px',
						flexWrap: 'wrap',
						height: height,
						textAlign: 'justify',
					},
				]}
				multiline={true}
				numberOfLines={numberLines}
				maxLength={maxLength}
			/>
			<TextLength>
				{valueText.length}/{maxLength}
			</TextLength>
		</Container>
	)
}

export default InputTextArea
