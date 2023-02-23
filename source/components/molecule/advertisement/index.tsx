import React from 'react'
import { Container } from 'react-bootstrap'

import advertisement_01 from './advertisement.jpg'

const Advertisement = () => {
	return (
		<React.Fragment>
			<section className={'overflow-hidden mb-5 position-relative'}>
				<Container fluid>
					<a
						href="https://funcap.se.gov.br/simposio-do-xlviii-encontro-cultural-de-laranjeiras-2023/"
						target="_blank"
						rel="noreferrer"
					>
						<div
							className="w-100 p-2"
							style={{
								height: '400px',
								width: '100%',
								zIndex: 999,
							}}
						>
							<img
								src={advertisement_01}
								alt="Encontro Cultural de Laranjeiras"
								className="w-100 h-100"
								style={{
									objectFit: 'contain',
								}}
							/>
						</div>
					</a>
				</Container>
			</section>
		</React.Fragment>
	)
}

export default Advertisement
