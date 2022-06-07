import theme from '@/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90vw;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    flex-direction: column;
  }
`

export const ContainerOrganism = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerRight = styled(ContainerOrganism)`
  flex: 1;
  z-index: 1;
  @media (min-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    display: none;
  }
`

export const ContainerLeft = styled(ContainerOrganism)`
  flex: 1;
  z-index: 3;
  max-width: 500px;

  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    align-self: center;
  }
`
export const ContainerDetails = styled(ContainerOrganism)`
  flex: 1;
  z-index: 2;
  width: 60%;
  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    width: 100%;
  }
`
