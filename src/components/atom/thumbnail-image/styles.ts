import theme from '@/theme'
import { MotiText } from 'moti'
import styled from 'styled-components/native'

export const ContainerImageBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
`

export const ContainerLogo = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.7rem;
`
export const Title = styled(MotiText)`
  color: #f2f2f2;
  width: 100%;
  z-index: 5;
  text-align: center;
  padding: 0.7rem;
  font-size: 1.5vw;
  font-family: ${theme.FONTS.TITLE_BOLD};
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
  justify-self: center;
`
