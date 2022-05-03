import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
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
  margin-bottom: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${theme.FONTS.TITLE_BOLD};
  color: ${theme.COLORS.TEXT};
`
export const Info = styled.Text`
  font-size: 12px;
  font-weight: 500;
  padding: 4px;
  color: ${theme.COLORS.TEXT};
  text-align: justify;
  text-indent: 20px;
`

export const Topic = styled(Info)`
  font-weight: bold;
`
