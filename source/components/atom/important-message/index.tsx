import React from 'react'

import { Important } from './styles'

type Props = {
	message?: string
}

const ImportantMessage = ({ message = '* Campos Obrigatórios' }: Props) => {
	return <Important>{message}</Important>
}

export default ImportantMessage
