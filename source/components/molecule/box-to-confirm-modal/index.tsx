import React from 'react'
import { Modal, StyleSheet } from 'react-native'

import theme from '@/theme'
import { FontAwesome } from '@expo/vector-icons'

import Button from '@/components/atom/button'

import {
	Container,
	Box,
	ContainerButton,
	ContainerMessage,
	ContainerHeader,
	Message,
	MessageTitle,
	Title,
	ContainerIcon,
} from './styles'

type types = 'confirm' | 'warning'

type MessageType = {
	icon: string
	color: string
	colorBold: string
	title: string
	message: string
	message_warning: string
	warning: string
}

type Props = {
	onPressConfirm: () => void
	onPressCancel: () => void
	visible: boolean
	onChangeVisibility: (visible: boolean) => void
	type: types
	messageProps?: MessageType
}

const BoxToConfirmModal = ({
	onChangeVisibility,
	onPressCancel,
	onPressConfirm,
	visible,
	type,
	messageProps,
}: Props) => {
	const messages: { [key in types]: MessageType } = {
		warning: {
			icon: 'exclamation-triangle',
			color: theme.COLORS.TEXT_WARNING,
			colorBold: theme.COLORS.TEXT_WARNING_BOLD,
			title: 'Atenção com a operação',
			warning: 'Aviso',
			message: 'Você tem certeza que deseja cancelar todas as alterações?',
			message_warning: 'Este processo não poderá ser desfeito.',
		},
		confirm: {
			icon: 'check',
			color: theme.COLORS.TEXT_CONFIRM,
			colorBold: theme.COLORS.TEXT_CONFIRM_BOLD,
			title: 'Confirmar a operação',
			warning: 'Aviso',
			message: 'Você tem certeza que deseja salvar as alterações?',
			message_warning: 'Este processo não poderá ser desfeito.',
		},
	}

	const { icon, color, colorBold, title, message, message_warning, warning } =
		messages[type]

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				alert('Modal has been closed.')
			}}
		>
			<Container>
				<Box>
					<ContainerHeader>
						<Title>{messageProps?.title || title}</Title>
						<MessageTitle>{messageProps?.message || message}</MessageTitle>
					</ContainerHeader>
					<ContainerMessage
						style={{
							borderLeftColor: messageProps?.color || color,
						}}
					>
						<ContainerIcon>
							<FontAwesome
								name={messageProps?.icon || icon}
								size={24}
								color={messageProps?.color || color}
							/>
							<Message
								style={{
									color: messageProps?.colorBold || colorBold,
									fontWeight: 'bold',
									marginLeft: 10,
								}}
							>
								{messageProps?.warning || warning}
							</Message>
						</ContainerIcon>
						<Message
							style={{
								color: messageProps?.color || color,
							}}
						>
							{messageProps?.message_warning || message_warning}
						</Message>
					</ContainerMessage>

					<ContainerButton>
						<Button
							text="Cancelar"
							color={theme.COLORS.CANCEL_OPERATION}
							style={styles.button}
							textStyle={styles.textButton}
							onPress={() => {
								onChangeVisibility(false)
								onPressCancel()
							}}
						/>
						<Button
							text="Aplicar"
							color={messageProps?.colorBold || colorBold}
							style={styles.button}
							textStyle={styles.textButton}
							onPress={() => {
								onChangeVisibility(false)
								onPressConfirm()
							}}
						/>
					</ContainerButton>
				</Box>
			</Container>
		</Modal>
	)
}

export default BoxToConfirmModal

const styles = StyleSheet.create({
	textButton: {
		fontSize: 12,
	},
	button: {
		borderRadius: 8,
		borderWidth: 1,
		maxWidth: 90,
		height: 40,
	},
})
