import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const LogoMapaCultural: React.FC = () => {
	const fontSize = RFValue(80)
	const link = 'https://funcap.mapacultural.se.gov.br/'
	const [loaded, setLoaded] = useState(false)

	return (
		<a href={link} style={{ textDecoration: 'none' }}>
			<img
				src={'/logo-mapa-cultural.png'}
				alt="Mapa Cultural"
				height={fontSize}
				width={fontSize}
			/>
		</a>
	)
}

export default LogoMapaCultural
