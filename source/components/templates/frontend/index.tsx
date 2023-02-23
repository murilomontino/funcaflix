import React, { useEffect, useState } from 'react'

import theme from '@/theme'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { Container, ContainerHeader } from './styles'

type Props = {
	children: React.ReactNode | React.FC | React.Component | JSX.Element
}

const TemplateFrontEnd = ({ data, children }: Props) => {
	const [backToTop, setBackToTop] = useState(null)

	useEffect(() => {
		if (document?.getElementById('back-to-top')) {
			setBackToTop(document?.getElementById('back-to-top'))
		}

		if (backToTop !== null && backToTop !== undefined) {
			document
				?.getElementById('back-to-top')
				?.classList?.add('animated', 'fadeOut')
			window?.addEventListener('scroll', (e) => {
				if (document?.documentElement?.scrollTop > 50) {
					document?.getElementById('back-to-top')?.classList?.remove('fadeOut')
					document?.getElementById('back-to-top')?.classList?.add('fadeIn')
				} else {
					document?.getElementById('back-to-top')?.classList?.remove('fadeIn')
					document?.getElementById('back-to-top')?.classList?.add('fadeOut')
				}
			})
			// scroll body to 0px on click
			document?.querySelector('#top')?.addEventListener('click', (e) => {
				e.preventDefault()
				window?.scrollTo({ top: 0, behavior: 'smooth' })
			})
		}
	}, [backToTop])

	return (
		<Container>
			<>
				<div id="back-to-top" style={{ zIndex: 999 }}>
					<div
						className="top"
						/*             to="#"
						 */ id="top"
						style={{
							background: theme.COLORS.BACKGROUND,
						}}
					>
						<i className="fa fa-angle-up"></i>{' '}
					</div>
				</div>
				<ContainerHeader>
					<Header />
				</ContainerHeader>
				{children}
				<div style={{ zIndex: 4 }}>
					<Footer />
				</div>
			</>
		</Container>
	)
}

export default TemplateFrontEnd
