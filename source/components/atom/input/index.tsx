import React from 'react'

import { InputDefault, InputMasked } from './styles'

const Input = (props) => {
	if (props.mask) {
		return <InputMasked {...props} />
	}

	return <InputDefault {...props} />
}

export default Input
