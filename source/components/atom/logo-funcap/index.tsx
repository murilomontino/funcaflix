import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
	size: number
}

const LOGO = '/logo-funcap-texto.png'
const LINK = 'https://www.funcap.se.gov.br/'

const LogoFuncap: React.FC<Props> = ({ size }) => {
	const fontSize = useScaledSize(size)

	return (
		<TouchableOpacity>
			<Link href={LINK}>
				<Image
					src={LOGO}
					width={fontSize}
					height={fontSize}
					alt="Logo Funcap"
				/>
			</Link>
		</TouchableOpacity>
	)
}

export default LogoFuncap
