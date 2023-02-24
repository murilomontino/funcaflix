import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import RootContext from '@/context/Root'

import TemplateFrontEnd from '@/components/templates/frontend'

const queryClient = new QueryClient()
// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
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

export default App
