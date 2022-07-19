import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerBackground = styledWeb.div`
  width: 100vw;
  height: 75vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  
`

export const ContainerLogo = styled.View`
  margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
  align-self: center;
`
export const Container = styled.View`
  padding: 20px;
`

export const LinkAnchor = styledWeb.a`
  color: ${theme.COLORS.WHITE};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    color: orange;
  }
`

export const Warning = styledWeb.p`
  color: ${theme.COLORS.WHITE};
  padding: 8px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  `
