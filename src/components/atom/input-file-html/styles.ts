import theme from '@/theme'
import styled from 'styled-components'

export const InputFile = styled.input.attrs({
  type: 'file',
})`
  display: none;
`
export const Label = styled.label`
  padding: 20px 10px;
  width: 200px;
  background-color: ${theme.COLORS.BUTTON_SECONDARY};
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
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
