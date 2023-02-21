import CardBootstrap from 'react-bootstrap/Card'

import styled from 'styled-components'

type Props = {
	color: string
}

export const Card = styled(CardBootstrap) <Props>`
	border-color: ${({ color }) => color || 'transparent'};
	min-height: 300px;
	height: 400px;
	max-height: 450px;
	width: 97vw !important;

	@media (max-width: 768px) {
		max-height: fit-content !important;
		height: fit-content !important;
	}
`

export const ContainerIMG = styled.div`
	padding: 1rem;
	max-width: fit-content;
`
