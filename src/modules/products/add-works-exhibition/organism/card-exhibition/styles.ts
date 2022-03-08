import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
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
`

export const ContainerBlock = styled.View`
  flex: 1;
  margin-left: 10px;
`

export const ContainerBlocksInfos = styled.View`
  flex: 1;
  flex-direction: row;
`

export const Title = styled.Text`
  padding: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
  color: ${theme.COLORS.TEXT};
`
export const Info = styled.Text`
  font-size: 10px;
  font-weight: 500;
  padding: 4px;
  color: ${theme.COLORS.TEXT};
`

export const Topic = styled(Info)`
  font-weight: bold;
`
