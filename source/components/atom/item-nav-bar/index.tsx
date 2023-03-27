import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'

import styles from './styles.module.scss'

type Props = {
	title: string
	link?: string
	select?: boolean
	passHref?: boolean
	disabled?: boolean
	items?: Array<{
		title: string
		link: string
	}>
}

const ItemNavBar: React.FC<Props> = ({
	title,
	link,
	passHref = false,
	disabled = false,
	items,
}) => {
	if (passHref) {
		return (
			<a href={link} style={{ textDecoration: 'none' }}>
				<Nav.Link className="text-primary" disabled={disabled}>
					<h6 className="small-caps font-Weight-700">{title}</h6>
				</Nav.Link>
			</a>
		)
	}

	return (
		<Nav.Item>
			{link && (
				<Link href={disabled ? '#' : link} passHref={passHref}>
					<Nav.Link
						className={`text-primary p-2 mt-1 hover-effect-orange`}
						disabled={disabled}
					>
						<h6 className="small-caps font-weight-700">{title}</h6>
					</Nav.Link>
				</Link>
			)}

			{!link && (
				<NavDropdown
					title={title}
					id="basic-nav-dropdown"
					className={`text-primary mt-1 hover-effect-orange small-caps font-weight-700 ${styles.dropdown}`}
				>
					{items?.map((item, index) => {
						return (
							<Link href={item.link} key={index}>
								<NavDropdown.Item href={item.link} className="text-primary">
									{item.title}
								</NavDropdown.Item>
							</Link>
						)
					})}
				</NavDropdown>
			)}
		</Nav.Item>
	)
}

export default ItemNavBar
