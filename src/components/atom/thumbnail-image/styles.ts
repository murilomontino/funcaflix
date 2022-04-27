import theme from '@/theme'
import { MotiText, MotiView } from 'moti'
import styled from 'styled-components/native'

export const ContainerImageBackground = styled(MotiView)`
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
`

export const ContainerLogo = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.7rem;
`
export const Title = styled(MotiText)`
  color: #f2f2f2;
  z-index: 5;
  text-align: center;
  padding: 0.7rem;
  font-size: calc(0.6vw + 6px);
  font-family: ${theme.FONTS.TITLE_BOLD};
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
  justify-self: center;
`
