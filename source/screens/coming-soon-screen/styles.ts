import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerBackground = styledWeb.div`
  width: 100vw;
  height: 70vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  margin-bottom: 72px;
`

export const ContainerLogo = styled.View`
  margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
  align-self: center;
`
export const Container = styled.View`
  padding: 20px;
`

export const LinkAnchor = styledWeb.a`
  color: ${theme.COLORS.IMPORTANT};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    color:  ${theme.COLORS.IMPORTANT_HOVER};
  }

  
`

export const Warning = styledWeb.p`
  color: ${theme.COLORS.WHITE};
  padding: 8px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  strong {
    color: ${theme.COLORS.IMPORTANT};
    font-weight: bold;
  }

  `
