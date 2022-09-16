import React from 'react'

import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript, Html } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>FUNCAP - Mapa Cultural de Sergipe</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
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

// OR...

CustomDocument.getInitialProps = async (props) => {
  const result = await getInitialProps(props)
  // Mutate result...
  return result
}

export default CustomDocument
