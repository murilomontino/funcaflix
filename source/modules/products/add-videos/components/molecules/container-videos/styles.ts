import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerCentered = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`
export const Warning = styled.Text`
  color: ${theme.COLORS.TEXT};
  font-family: ${theme.FONTS.TITLE_900};
  font-weight: 600;
  font-size: ${theme.FONTS.SIZE.LARGE};
  text-align: center;
  text-transform: uppercase;
`
