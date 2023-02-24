import React from 'react'
import { TouchableOpacity } from 'react-native'

import Image from 'next/image'

type Props = {
	size: number
}
const LOGO = '/logo-funcap-texto.png'
const LINK = 'https://www.funcap.se.gov.br/'

const LogoFuncap: React.FC<Props> = ({ size }) => {
	return (
		<a href={LINK} style={{ textDecoration: 'none' }}>
			<TouchableOpacity>
				<Image
					src={LOGO}
					width={'100%'}
					height={'100%'}
					objectFit="contain"
					alt="Logo Funcap"
				/>
			</TouchableOpacity>
		</a>
	)
}

export default LogoFuncap
