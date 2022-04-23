import theme from '@/theme'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const ContainerDescription = styled.View`
  flex: 2;
`

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ContainerAnimated = styled(MotiView)`
  margin-inline: -12px;
  background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
  border-radius: 8px;
  box-shadow: 10px 5px 5px black;
`
