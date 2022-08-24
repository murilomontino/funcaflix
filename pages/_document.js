import React from 'react'

import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript, Html } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>FUNCAPFlix - Mapa Cultural de Sergipe</title>
          <link rel="shortcut icon" href="/public/favicon.ico" />
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

// OR...

CustomDocument.getInitialProps = async (props) => {
  const result = await getInitialProps(props)
  // Mutate result...
  return result
}

export default CustomDocument
