import theme from '@/theme'
import styled from 'styled-components'

export const ContainerFooter = styled.div`
	display: flex;
	flex: 1;
	z-index: 4;
	height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
	max-height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
	flex-direction: row;
	width: 100%;
	background-color: ${theme.COLORS.BACKGROUND_FOOTER};
`

export const ContainerAbout = styled.div`
	display: flex;
	flex: 2;
	flex-direction: column;
	padding-block: 15px;
	padding-left: 34px;
`
export const ContainerSocial = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
`

export const ContainerLogo = styled.div`
	display: flex;
	flex: 1;
	max-width: 480px;
	justify-content: space-around;
	flex-wrap: wrap;
	flex-direction: row;
`

export const ContainerLinks = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`

export const TitleLogo = styled.h3`
	font-size: 1rem;
	font-weight: 700;
	color: #fff;
	margin: 0;
	text-align: center;
	text-transform: capitalize;
	font-variant: small-caps;
`
