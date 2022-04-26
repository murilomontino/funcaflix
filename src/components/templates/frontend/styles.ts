import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerChildren = styled.View`
  background-color: ${theme.COLORS.BACKGROUND_FRONTEND};
  padding: 0px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-bottom: ${theme.CONSTANTS.FOOTER_HIGHT}px;
`

export const Container = styledWeb.div`
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ContainerHeader = styledWeb.div`
  z-index: 3;
`
