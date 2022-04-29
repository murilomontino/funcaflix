/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'

import '../styles/_styles.scss'

import 'raf/polyfill'
import 'setimmediate'

import RootContext from '@/context/Root'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <RootContext>
      <Component {...pageProps} />
    </RootContext>
  )
}
