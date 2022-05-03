import theme from '@/theme'
import { MotiView } from 'moti'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled(MotiView)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const BarHeader = styledWeb.div`
  display: flex;
  position: fixed;
  top: 0;

  width: 100%;
  z-index: 1;
  background-color: transparent;
  -webkit-transition: 0.5s ease-in;
  -moz-transition: 0.5s ease-in;
  -o-transition: 0.5s ease-in;
  transition: 0.5s ease-in;
  :hover {
    background-color: ${theme.COLORS.BAR_HEADER};
  }
`

export const ContainerRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`
