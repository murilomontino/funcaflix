import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerBackground = styledWeb.div`
  background-size: cover;
  background-image: url(/background-image.png);
  min-height: 100vh;
`

export const ContainerLogo = styled.View`
	flex: 1;
	margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
	max-height: 150px;
`
export const Container = styled.View`
	z-index: 3;
`

export const ContainerChildren = styledWeb.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  max-width: 100vw;
  height: 100%;
  z-index: 99;
`
