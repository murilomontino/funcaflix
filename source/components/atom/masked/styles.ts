import { MaskedTextInput } from 'react-native-mask-text'

import theme from '@/theme'
import styled from 'styled-components/native'

export const InputDefault = styled(MaskedTextInput)`
	flex: 4;
	color: ${theme.COLORS.BORDER_BUTTON};
	background-color: ${theme.COLORS.BACKGROUND_INPUT};
	font-weight: 500;
	padding: 8px;
	border-radius: 2px;
	border-color: ${theme.COLORS.BORDER_BUTTON};
`
