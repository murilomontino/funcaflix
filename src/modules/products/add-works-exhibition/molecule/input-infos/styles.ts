import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 179vh;
  max-width: 179vh;
  justify-content: space-between;
  margin: 12px;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.COLORS.BORDER_LIGHT};
  background-color: ${theme.COLORS.CARD_BACKGROUND};
`

export const ContainerInfo = styled.View`
  flex: 2;
  height: 100%;
`

export const ContainerBlock = styled.View``

export const ContainerBlocksInfos = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
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
export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Topic = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${theme.COLORS.TEXT};
  min-width: 100px;
  width: 100px;
  text-align: center;
  justify-content: flex-end;
  align-items: flex-end;
`
