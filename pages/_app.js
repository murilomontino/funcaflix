/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'

import '../styles/_styles.scss'

import 'raf/polyfill'
import 'setimmediate'

import LoadingContextProvider from '@/context/LoadingModal'
import ToastContextProvider from '@/context/ToastModal'

const RootContext = ({ children }) => {
  return (
    <LoadingContextProvider>
      <ToastContextProvider>{children}</ToastContextProvider>
    </LoadingContextProvider>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <RootContext>
      <Component {...pageProps} />
    </RootContext>
  )
}
