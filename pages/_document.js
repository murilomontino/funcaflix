import React from 'react'

import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

import favIcon16x16 from '../public/favicon-16x16.png'
import favIcon32x32 from '../public/favicon-32x32.png'
import favIcon from '../public/favicon.ico'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>FUNCAP - Mapa Cultural de Sergipe</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" src={favIcon} />
          <link rel="icon" type="image/png" sizes="32x32" src={favIcon32x32} />
          <link rel="icon" type="image/png" sizes="16x16" src={favIcon16x16} />
        </Head>
        <body>
          <React.Fragment>
            <Main />
            <NextScript />
          </React.Fragment>
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
