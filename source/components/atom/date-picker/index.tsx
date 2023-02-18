import React, { useState } from 'react'
import {
	StyleProp,
	ViewStyle,
	TextStyle,
	View,
	StyleSheet,
	Text,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import HelperText from '../helper-text'
import DatePicker from './react-date-picker/entry'

import colors from '@/global/colors'

interface Props {
	value: Date
	error?: string
	onChangeValue: (text: Date) => void
	colorIcon?: string
	topic: string
	stylesViewTitle?: StyleProp<ViewStyle>
	maxWidthTitle?: number | string
	styleTopic?: StyleProp<TextStyle>
	requered?: boolean
	disabled?: boolean
	minimumDate?: Date
}

const DatePickerCustom = ({
	value,
	onChangeValue,
	topic,
	error,
	disabled = false,
	stylesViewTitle,
	maxWidthTitle = 150,
	styleTopic,
	requered = false,
	minimumDate = new Date(new Date().getFullYear() - 105, 0, 1),
	colorIcon = colors.white,
}: Props) => {
	const [date, setDate] = useState<Date>(value)

	const onChangeDate = (date: Date) => {
		onChangeValue(date)
		setDate(date)
	}

	return (
		<div>
			<View
				style={{
					zIndex: 10,
					margin: 8,
					padding: 4,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				{!!topic && (
					<View
						style={[
							styles.viewTitle,
							stylesViewTitle,
							{
								width: maxWidthTitle,
							},
						]}
					>
						<Text style={[styles.topicForm, styleTopic]}>{topic}</Text>
						{requered && <Text style={styles.topicRequered}>*</Text>}
					</View>
				)}
				<DatePicker
					value={date}
					onChange={onChangeDate}
					className={
						!disabled
							? 'date-picker-container date-picker'
							: 'date-picker-container date-picker-disabled'
					}
					calendarAriaLabel="calendar"
					required
					disableCalendar={disabled}
					disabled={disabled}
					locale="pt-BR"
					calendarIcon={
						<FontAwesome name="calendar" size={24} color={colorIcon} />
					}
					minDate={minimumDate}
					maxDate={new Date(new Date().getFullYear() + 10, 0, 1)}
				/>
			</View>
			{error && <HelperText text={error} visible />}
		</div>
	)
}

export default DatePickerCustom

export const styles = StyleSheet.create({
	topicForm: {
		fontWeight: 'bold',
		color: '#f1f1f1',
		paddingVertical: 4,
		textAlign: 'right',
	},
	topicRequered: {
		fontWeight: 'bold',
		color: colors.redSecondary,
		fontSize: 18,
		textAlign: 'right',
		paddingLeft: 2,
	},
	viewTitle: {
		flex: 1,
		flexDirection: 'row',
		paddingRight: 8,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
})
