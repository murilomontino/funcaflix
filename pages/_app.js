import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import RootContext from '@/context/Root'
import 'bootstrap/dist/css/bootstrap.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import TemplateFrontEnd from '@/components/templates/frontend'
import 'raf/polyfill'
import 'setimmediate'
import '../styles/_styles.scss'

const queryClient = new QueryClient()
// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
	return (
		<React.Fragment>
			<QueryClientProvider client={queryClient}>
				<RootContext>
					<TemplateFrontEnd>
						<Component {...pageProps} />
					</TemplateFrontEnd>
				</RootContext>
			</QueryClientProvider>
		</React.Fragment>
	)
}

export default MyApp
