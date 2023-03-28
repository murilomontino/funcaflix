import { useRef } from 'react'

import { useDrawer } from '@/context/DrawerMenu'

const ButtonOpenMenu = () => {
	const ref = useRef()

	const { toggleDrawer } = useDrawer()
	return (
		<button ref={ref} className="p-2 m-2 btn bnt-link" onClick={toggleDrawer}>
			<i className="fa fa-bars" style={{ fontSize: 12 }} />
		</button>
	)
}

export default ButtonOpenMenu
