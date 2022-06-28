/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import RootContext from '@/context/Root'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'react-loading-skeleton/dist/skeleton.css'

import '../styles/_styles.scss'
import 'raf/polyfill'
import 'setimmediate'

const queryClient = new QueryClient()
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RootContext>
        <Component {...pageProps} />
      </RootContext>
    </QueryClientProvider>
  )
}
