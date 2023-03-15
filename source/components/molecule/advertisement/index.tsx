import React from 'react'
import { Container } from 'react-bootstrap'

import ImageNext from '@/components/atom/image-next'

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
							className="w-100 p-2 d-flex justify-content-center align-items-center"
							style={{
								height: '250px',
								width: '100%',
								zIndex: 999,
							}}
						>
							<ImageNext
								image="jornada-do-usuario.png"
								alt="Pesquisa de Jornada do Usuário"
								width={1200}
								height={250}
								objectFit="contain"
							/>
						</div>
					</a>
				</Container>
			</section>
		</React.Fragment>
	)
}

export default Advertisement
