import React, { useCallback } from 'react'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import { Document } from '@/forms/Product/types'

import { Container, TextRequered, ContainerCentered, Text } from './styles'

import useFileReader from '@/hooks/utils/use-file-reader'

type mimeType =
	| 'application/pdf'
	| 'image/jpeg'
	| 'image/png'
	| 'image/jpg'
	| 'audio/mp3'
	| 'video/*'

type Props = {
	requered?: boolean
	message?: string
	type: mimeType[]
	multiple?: boolean
	onChangeFiles: (files: Document[]) => void
	selectedLabel?: string
}

export const GetFileButton = ({
	requered = true,
	message = 'Selecione um arquivo',
	type,
	multiple = false,
	selectedLabel,
	onChangeFiles,
}: Props) => {
	// Busca um arquivo no formato PDF

	const fileReader = useFileReader()

	const onChangeFile = useCallback(async () => {
		try {
			const documents: DocumentResult = await DocumentPicker.getDocumentAsync({
				type: type,
				multiple,
				copyToCacheDirectory: true,
			})
			if (documents.type === 'success') {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const newFiles: Document[] = (await fileReader(
					documents.output as any
				)) as Document[]

				onChangeFiles(newFiles)
				return true
			}
		} catch (error) {
			return false
		}
	}, [])

	return (
		<Container onPress={onChangeFile}>
			<ContainerCentered>
				<Text>{!multiple ? selectedLabel || message : message}</Text>
				{requered && <TextRequered>*</TextRequered>}
			</ContainerCentered>
		</Container>
	)
}

export default GetFileButton
