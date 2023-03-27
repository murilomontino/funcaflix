// src/MyModal.js

import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalAdvertisement = () => {
	const [show, setShow] = useState(true)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<React.Fragment>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="text-dark text-center">
						{'Convite para participar de nossa pesquisa!'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="text-dark text-justify line-height-24">
						Prezado(a) Usuário do Mapa Cultural,
						<br />
						<br />
						Espero que esta mensagem o encontre bem. Estamos conduzindo uma
						pesquisa sobre o streaming Funcaflix e acreditamos que sua
						experiência e conhecimento seriam extremamente valiosos para o nosso
						estudo.
						<br />
						<br />
						Gostaríamos de convidá-lo(a) a participar desta pesquisa, que visa
						buscar melhorias e novos direcionamentos no desenvolvimento da
						plataforma. Ao compartilhar suas opiniões e percepções conosco, você
						estará contribuindo significativamente no desenvolvimento, soluções,
						estratégias e melhorias, mais eficientes para a plataforma.
						<br />
						<br />
						A pesquisa levará menos que 10 minutos para ser concluída.
						<br />
						<br />
						Para participar, basta clicar no link abaixo e responder ao
						questionário:
						<br />
						<br />
						<div className="d-flex justify-content-center align-content-center h-10">
							<a
								href="https://forms.gle/jr9LPN7iKFLWEE9bA"
								className="text-secondary text-center w-100"
							>
								https://forms.gle/jr9LPN7iKFLWEE9bA
							</a>
						</div>
						<br />
						<br />
						Agradecemos antecipadamente por sua colaboração e tempo dedicado a
						esta pesquisa. Sua contribuição é de grande valia para nós e será
						tratada com a máxima confidencialidade.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	)
}

export default ModalAdvertisement
