import theme from '@/theme'
import styled from 'styled-components/native'

export const Title = styled.Text`
  font-weight: bold;
  color: ${theme.COLORS.TEXT};
  font-size: ${theme.FONTS.SIZE.MEDIUM};
  text-align: left;
  font-family: ${theme.FONTS.TITLE_BOLD};
  margin-bottom: 8px;
  width: 70%;
  text-transform: uppercase;
`

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`
