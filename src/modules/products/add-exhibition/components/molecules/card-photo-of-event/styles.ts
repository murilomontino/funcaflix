import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin: 10px;
  background-color: ${theme.COLORS.CARD_BACKGROUND};
  border-radius: 2px;
  width: 100%;
`

export const ContainerButtonIcon = styled.TouchableHighlight`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 50%;
  margin: 8px;
  padding: 4px;
`
