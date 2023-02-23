/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { View } from 'react-native'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import { Getter } from '@/services/config/types'

type Props<T> = {
	onSubmit: () => Promise<Getter<T>>
	reset: () => void
	validated: boolean
	title: string
}

function SendFormExhibitionButton<T>({
	onSubmit,
	reset,
	validated,
	title,
}: Props<T>) {
	// -----------------------------------------------------------------------------
	// Efeito Visual ----------------------------------------------------------------
	const { AlertToast } = useToast()
	const { showLoading, hideLoading } = useLoading()

	// -----------------------------------------------------------------------------
	// Funções que enviam os dados do formulário -----------------------------------
	// -----------------------------------------------------------------------------

	const handleSubmit = async () => {
		try {
			showLoading()
			const response = await onSubmit()

			switch (response.statusCode) {
				case 200:
					AlertToast('success', 'Cadastrado Com Sucesso!')
					reset()
					break

				default:
					AlertToast(
						'erro',
						`Erro ao cadastrar! Tente novamente. ${response.error}`
					)
					break
			}
		} catch (error) {
			AlertToast('erro', `Erro ao cadastrar! Tente novamente. ${error}`)
		} finally {
			hideLoading()
		}
	}

	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Button
				style={{
					minWidth: 100,
				}}
				disabled={!validated}
				onPress={handleSubmit}
				text={title}
			/>
		</View>
	)
}

export default SendFormExhibitionButton
