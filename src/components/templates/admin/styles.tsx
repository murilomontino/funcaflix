import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

const BACKGROUND = '/background-image.png'

export const ContainerBackground = styledWeb.div`
  background-size: cover;
  background-image: url(${BACKGROUND});
  min-height: 100vh;
`

export const ContainerLogo = styled.View`
  flex: 1;
  margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
  max-height: 150px;
`
export const Container = styled.View``
