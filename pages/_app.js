import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'raf/polyfill'
import 'setimmediate'
import '../styles/_styles.scss'

import AppCustom from '@/App'

const App = ({ Component, pageProps }) => {
	return (
		<React.Fragment>
			<AppCustom Component={Component} pageProps={pageProps} />
		</React.Fragment>
	)
}

export default App
