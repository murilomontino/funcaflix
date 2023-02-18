import theme from '@/theme'
import { MotiText } from 'moti'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

type TitleProps = {
	lg?: boolean
	md?: boolean
	sm?: boolean
	xs?: boolean
}

export const Title = styled.Text<TitleProps>`
	font-size: 1rem;
	color: #fff;
	text-align: left;
	margin-left: 2rem;
	font-family: ${theme.FONTS.TITLE_BOLD};
	text-transform: uppercase;

	${({ lg }) => lg && `font-size: 2.5rem;`}

	${({ md }) => md && `font-size: 2rem;`}
`

export const SubTitle = styled(MotiText)`
	font-size: 0.8rem;
	align-self: center;
	color: #54b9c5;
	text-align: left;
	margin-left: 2rem;
	font-family: ${theme.FONTS.TITLE_BOLD};
	text-transform: uppercase;
`

export const ContainerText = styled.TouchableOpacity`
	flex-direction: row;
	padding: 6px;
	background-color: ${theme.COLORS.BACKGROUND_TITLE};

	width: 90vw;
	align-self: center;
`

export const Container = styledWeb.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
`
