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

type Props = {
	mobile: boolean
}

export const BarHeader = styledWeb.div<Props>`
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

  ${({ mobile }) =>
		mobile &&
		`
    background-color: ${theme.COLORS.BAR_HEADER};
  `}

  :hover {
    background-color: ${theme.COLORS.BAR_HEADER};
  }
`

export const ContainerRow = styledWeb.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`
