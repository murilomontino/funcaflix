import React from 'react'

import ItemNavBar from '@/components/atom/item-nav-bar'

import Items from './items'

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type Props = {
	flexDirection?: FlexDirection
}

const NavBar: React.FC<Props> = ({ flexDirection = 'row' }) => {
	return (
		<React.Fragment>
			<div className={`d-flex flex-${flexDirection} ms-3`}>
				{Items.map((item, index) => {
					return (
						<ItemNavBar
							title={item.title}
							link={item.link}
							key={index}
							{...item}
						/>
					)
				})}
			</div>
		</React.Fragment>
	)
}

export default NavBar
