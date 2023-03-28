import theme from '@/theme'
import styled from 'styled-components'

export const TitleLogo = styled.h1`
	color: ${theme.COLORS.TEXT};
	font-weight: bold;
	text-transform: uppercase;
	font-family: 'Inter900Black';
	margin-left: 20px;
	text-align: left;
`

export const ContainerTitle = styled.div`
	display: flex;
	flex: 2;
	justify-content: center;
	align-items: flex-start;
`

export const ContainerLogo = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 0 0 20px 20px;
	max-height: 150px;
`
