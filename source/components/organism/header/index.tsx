import { useEffect, useRef, useState } from 'react'

import Logo from '@/public/logo-mapa-cultural.png'
import Image from 'next/image'
import Link from 'next/link'

import ButtonLogin from '@/components/atom/button-login'
import ButtonOpenMenu from '@/components/atom/button-open-menu'

import { useSize } from '@/hooks/utils/use-size'

const OrderHeader = ({ logoLeft }) => {
	return (
		<>
			<ButtonOpenMenu />
			<Link href="/">
				<a style={{ textDecoration: 'none', margin: '12px' }}>
					<Image src={Logo} alt="Mapa Cultural" height={200} width={200} />
				</a>
			</Link>
			<ButtonLogin textVisible={false} />
		</>
	)
}

const Header = () => {
	const { size, web } = useSize()
	const [isScrolled, setIsScrolled] = useState(false)

	function onScroll(window, _event): any {
		const { scrollTop } = window.target.scrollingElement

		if (scrollTop === 0) {
			setIsScrolled(false)
		} else {
			setIsScrolled(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll as any)
		return () => {
			window.removeEventListener('scroll', onScroll as any)
		}
	}, [])

	const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)
	const ref = useRef()

	const { width } = size
	useEffect(() => {
		if (width < 1127) {
			setSizeNavBar(true)
		} else {
			setSizeNavBar(false)
		}
	}, [width])

	// 1127

	return (
		<div className="position-fixed">
			<div ref={ref}>
				<OrderHeader logoLeft={!sizeNavBar} />
			</div>
		</div>
	)
}

export default Header
