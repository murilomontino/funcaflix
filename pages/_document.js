import React from 'react'

import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript, Html } from 'next/document'

import favicon from '../assets/favicon.png'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.
CustomDocument.getInitialProps = getInitialProps

export default CustomDocument
