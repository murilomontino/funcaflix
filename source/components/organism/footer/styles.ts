import theme from '@/theme'
import styled from 'styled-components'

export const ContainerFooter = styled.div`
  display: flex;
  flex: 1;
  z-index: 4;
  height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
  max-height: ${theme.CONSTANTS.FOOTER_HIGHT}px;
  flex-direction: row;
  width: 100%;
  background-color: ${theme.COLORS.BACKGROUND_FOOTER};
`

export const ContainerAbout = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding-block: 15px;
  padding-left: 34px;
`
export const ContainerSocial = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

export const ContainerLogo = styled.div`
  display: flex;
  flex: 2.5;
  max-height: 100%;
  max-width: 480px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`

export const ContainerLinks = styled.a`
  display: flex;
  flex: 0.5;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`
