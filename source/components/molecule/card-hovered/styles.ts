import theme from '@/theme'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const Container = styled(MotiView)`
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
	width: 325px;
	height: 300px;
	position: absolute;
	border-radius: 5px;
`
