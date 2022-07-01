import { RFValue } from 'react-native-responsive-fontsize'

import theme from '@/theme'
import styled from 'styled-components'

export const InputFile = styled.input.attrs({
  type: 'file',
})`
  display: none;
`
export const Label = styled.label`
  padding: 8px;
  width: 225px;
  background-color: ${theme.COLORS.BUTTON_SECONDARY};
  color: #fff;
  text-transform: uppercase;
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
  font-size: ${RFValue(0.5)}rem;
  text-align: center;
  display: block;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid ${theme.COLORS.BORDER_BUTTON};
  cursor: pointer;
  &:hover {
    background-color: ${theme.COLORS.BAR_HEADER};
  }
`
