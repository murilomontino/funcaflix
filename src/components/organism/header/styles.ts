import theme from '@/theme'
import styled from 'styled-components'

export const BarHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: ${theme.CONSTANTS.HEADER_HIGHT}px;
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
