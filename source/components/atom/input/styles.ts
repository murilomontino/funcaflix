import { MaskedTextInput } from 'react-native-mask-text'

import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const InputField = styledWeb.div`
  flex: 4;
  color: ${theme.COLORS.BORDER_BUTTON};
  background-color: ${theme.COLORS.BACKGROUND_INPUT};
  font-weight: 500;
  padding: 8px;
  border-radius: 2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
`

export const InputDefault = styled.TextInput`
	flex: 4;
	color: ${theme.COLORS.BORDER_BUTTON};
	background-color: ${theme.COLORS.BACKGROUND_INPUT};
	font-weight: 500;
	padding: 8px;
	border-radius: 2px;
	border-color: ${theme.COLORS.BORDER_BUTTON};
`

export const InputMasked = styled(MaskedTextInput)`
	flex: 4;
	color: ${theme.COLORS.BORDER_BUTTON};
	background-color: ${theme.COLORS.BACKGROUND_INPUT};
	font-weight: 500;
	padding: 8px;
	border-radius: 2px;
	border-color: ${theme.COLORS.BORDER_BUTTON};
`
