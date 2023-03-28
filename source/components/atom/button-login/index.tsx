import React, { useMemo } from 'react'

import theme from '@/theme'
import Link from 'next/link'

type Props = {
	textVisible?: boolean
}

const ButtonLogin = ({ textVisible = true }: Props) => {
	const color = useMemo(() => theme.COLORS.IMPORTANT || theme.COLORS.TEXT, [])

	return (
		<Link href={'https://mapacultural.acesso.funcap.se.gov.br/'} passHref>
			<button className="btn btn-link">
				<React.Fragment>
					<p>Entrar</p>
				</React.Fragment>
			</button>
		</Link>
	)
}

export default ButtonLogin
