import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap'

import theme from '@/theme'

import { If } from '@/utils/tsx-controls'

type Props = {
	title: string
	image?: any
	children?: JSX.Element | JSX.Element[]
}

const BreadCrumb = ({ title, image, children }: Props) => {
	return (
		<React.Fragment>
			<Container
				fluid
				className="iq-breadcrumb-one iq-bg-over iq-over-dark-50 card w-100 d-flex"
				style={{ backgroundImage: `url(${image})`, zIndex: 0 }}
			>
				<Row
					className="position-relative w-100 align-items-end justify-content-center"
					style={{
						top: '96px',
					}}
				>
					<Nav aria-label="breadcrumb" className="iq-breadcrumb-two d-flex">
						<h1
							className="text-lowercase text-white mb-2 small-caps font-bold font-size-40 "
							style={{
								fontFamily: theme.FONTS.TITLE_BOLD,
								fontVariant: 'small-caps',
								letterSpacing: 3,
							}}
						>
							{title}
						</h1>
					</Nav>
				</Row>

				<If condition={!!children}>
					<div
						className="position-absolute w-100 h-100 top-0 p-2"
						style={{
							zIndex: 99,
						}}
					>
						<div className="d-flex w-100 h-100 position-relative">
							{children}
						</div>
					</div>
				</If>
			</Container>
		</React.Fragment>
	)
}

export default BreadCrumb
