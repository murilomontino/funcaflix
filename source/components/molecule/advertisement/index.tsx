import React from 'react'
import { Container } from 'react-bootstrap'

import advertisement_02 from './advertisement-02.png'

const Advertisement = () => {
	return (
		<React.Fragment>
			<section className={'overflow-hidden mb-5 position-relative'}>
				<Container fluid>
					<a
						href="https://forms.gle/jr9LPN7iKFLWEE9bA"
						target="_blank"
						rel="noreferrer"
					>
						<div
							className="w-100 p-2"
							style={{
								height: '250px',
								width: '100%',
								zIndex: 999,
							}}
						>
							<img
								src={advertisement_02}
								alt="Pesquisa de Jornada do Usuário"
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
