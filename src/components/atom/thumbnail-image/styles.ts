import { ImageBackground } from 'react-native'

import theme from '@/theme'
import { MotiText } from 'moti'
import styled from 'styled-components/native'

export const ContainerImageBackground = styled(ImageBackground)`
  justify-content: center;
  align-items: center;
  background-size: auto;
  background-repeat: no-repeat;
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
  font-family: ${theme.FONTS.TITLE_BOLD};
`
