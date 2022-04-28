import theme from '@/theme'
import { MotiView } from 'moti'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled(MotiView)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
  width: 325px;
  height: 300px;
  position: absolute;
  border-radius: 5px;
`

export const ContainerDescription = styledWeb.div`
  display: flex;
  flex: 2;

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    display: none;
  }
`

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
