import theme from '@/theme'
import { MotiView } from 'moti'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styledWeb.div`
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;

`

export const ContainerInformation = styled(MotiView)`
  flex: 1;
  background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
  border-radius: 4px;
  z-index: 0;
  justify-content: flex-end;
  border-width: 1px;
  border-color: ${theme.COLORS.BUTTON_SECONDARY};
  border-top-width: 0;
  border-radius: 4px;
`

export const ContainerThumbnail = styledWeb.div`
  display: flex;
  flex: 1;
  width: 100%;
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
