import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerFooter = styled.View`
  flex: 1;
  height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
  max-height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
  flex-direction: row;
  width: 100%;
`

export const ContainerAbout = styled.View`
  flex: 2;
  flex-direction: column;
  padding-top: 42px;
  padding-left: 34px;
`
export const ContainerSocial = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ContainerLogo = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`
