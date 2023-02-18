import React, { useEffect } from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import Link from 'next/link'

import ButtonLogin from '@/components/atom/button-login'
import HeaderLogo from '@/components/molecule/header-logo'
import SkeletonHeadLogo from '@/components/molecule/header-logo/skeleton'

import { ContainerBackground, LinkAnchor, Warning } from './styles'

import { useResources } from '@/hooks/utils/use-resources'

const ComingSoonScreen = () => {
	const { isFontReady } = useResources()

	const WIDTH_NUMBER = 7
	const TEXT_NUMBER = 2

	const TEXT_SIZE = useScaledSize(TEXT_NUMBER)
	const WIDTH_LOGO = useScaledSize(WIDTH_NUMBER)

	useEffect(() => {
		alert(
			`Fique ATENTO!!! O domínio mapas.cultura.se.gov.br será inativado a partir do dia 31 de Outubro não podendo mais ser utilizado para acesso da plataforma. \nO novo domínio será https://mapacultural.funcap.se.gov.br/`
		)
	}, [])

	return (
		<ContainerBackground>
			<div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
				{isFontReady ? (
					<HeaderLogo
						widthLogo={WIDTH_NUMBER}
						textSize={TEXT_NUMBER}
						subTitle="EM BREVE NOVIDADES NA PRÓXIMA ATUALIZAÇÃO DA PLATAFORMA"
					/>
				) : (
					<SkeletonHeadLogo width={WIDTH_LOGO} textSize={TEXT_SIZE} />
				)}
				<Warning>
					Em breve, novidades na Plataforma.
					<br />
					Fique atento, a partir do dia <strong>31 DE Outubro</strong> o domínio
					mapas.cultura.se.gov.br será inativado.
					<br />A plataforma passará a ser acessada pelo link:
				</Warning>
				<Link href={'https://mapacultural.funcap.se.gov.br/'} passHref>
					<LinkAnchor>https://mapacultural.funcap.se.gov.br/</LinkAnchor>
				</Link>
				<ButtonLogin />
			</div>
		</ContainerBackground>
	)
}

export default ComingSoonScreen
