import theme from '@/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 300px;

  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    width: 100vh;
  }
`

export const ContainerSend = styled.div`
  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    display: none;
  }
`

export const ContainerSelect = styled.div`
  display: flex;
  z-index: 50;
`
