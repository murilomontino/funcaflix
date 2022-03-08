import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.COLORS.BORDER_LIGHT};
  background-color: ${theme.COLORS.CARD_BACKGROUND};
`

export const ContainerInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`
