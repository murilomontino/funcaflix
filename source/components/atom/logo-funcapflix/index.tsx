import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
	size: number
}

const LOGO = '/logo-default.png'
const LINK = 'https://www.funcap.se.gov.br/'

const LogoFuncap: React.FC<Props> = ({ size }) => {
	return (
		<>
			<Link href={LINK}>
				<Image src={LOGO} width={250} height={250} alt="Logo Funcap" />
			</Link>
		</>
	)
}

export default LogoFuncap
