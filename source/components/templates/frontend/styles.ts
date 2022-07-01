import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerChildren = styled.View`
  padding: 0px;
  max-width: 100vw;
  height: 100%;
  z-index: 2;
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
