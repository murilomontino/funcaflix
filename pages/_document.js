import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

import favIcon16x16 from '../public/favicon-16x16.png'
import favIcon32x32 from '../public/favicon-32x32.png'
import favIcon from '../public/favicon.ico'

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>Funcaflix</title>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link rel="shortcut icon" src={favIcon} />
					<link rel="icon" type="image/png" sizes="32x32" src={favIcon32x32} />
					<link rel="icon" type="image/png" sizes="16x16" src={favIcon16x16} />
					<script
						src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
						integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
						crossorigin="anonymous"
						async
					></script>
					<script
						async
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmIaUksdQRVvoxMfooAo"
						crossorigin="anonymous"
					></script>
					<script
						async
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
						integrity="sha384-4rqMd3v/7IovViw/iwLu7zpoLqy3GP7SwI9lqbBMVP7VlRQZfkEyjxgyTFtIXc1t"
						crossorigin="anonymous"
					></script>
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

export default CustomDocument
