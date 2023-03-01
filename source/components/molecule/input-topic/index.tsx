/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react'
import { ViewStyle, TextInputProps, ImageStyle, TextStyle } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { If } from '@/utils/tsx-controls'

type Props = {
	topic?: string
	value: any
	requered?: boolean
	nameIcon?: string
	maxWidthTitle?: number | string
	onClickIcon?: (...args: any | undefined) => any | Promise<any>
	width?: number | string
	mask?: string
	maxLength?: number
	stylesViewTitle?: ViewStyle | ViewStyle[]
	styleViewContainer?: ViewStyle | ViewStyle[]
	styleViewInput?:
		| TextStyle
		| ViewStyle
		| ImageStyle
		| ImageStyle[]
		| ViewStyle[]
		| TextStyle[]
	styleTopic?: TextStyle | TextStyle[]
	textAlign?: 'left' | 'center' | 'right'
	onChangeText: (text: string) => void
} & Omit<TextInputProps, 'value'>

export const InputTopic = ({
	styleViewContainer,
	topic,
	value,
	mask = null,
	requered = false,
	nameIcon,
	onClickIcon,
	maxLength,
	styleViewInput,
	styleTopic,
	onChangeText,
	placeholder,
	textAlign = 'left',
	maxWidthTitle = 150,
	onFocus,
	onBlur,
	...rest
}: Props) => {
	const onKeyPress = useCallback(
		(event: any) => {
			if (event.keyCode === 13) {
				onClickIcon?.()
			}
		},
		[onClickIcon]
	)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChangeText(event.target.value)
	}

	return (
		<div className="position-relative d-flex w-80 row m-2">
			<input
				type="text"
				className="form-control"
				placeholder={placeholder}
				aria-label="Search"
				aria-describedby="basic-addon2"
				onKeyDown={onKeyPress}
				onChange={onChange}
				value={value}
			/>
			<If condition={!!nameIcon}>
				<button
					onClick={onClickIcon}
					type="button"
					className="
          position-absolute 
          btn btn-primary bg-red h-100 p-1
          align-content-center justify-content-center 
          d-flex border-0
          "
					style={{
						right: 0,
						width: 40,
					}}
				>
					<div className="d-flex align-items-center justify-content-center">
						<FontAwesome name={nameIcon as any} size={14} color="white" />
					</div>
				</button>
			</If>
		</div>
	)
}

export default InputTopic
