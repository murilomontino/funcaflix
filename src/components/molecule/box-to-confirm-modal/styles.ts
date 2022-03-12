import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`

export const ContainerHeader = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ContainerMessage = styled.View`
  flex: 2;
  padding: 20px;
  height: 100%;
  border-radius: 4px;
  background-color: #ffe9d9;
  border-left-width: 8px;
  margin: 20px;
  align-items: flex-start;
`

export const ContainerIcon = styled.View`
  padding: 8px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerButton = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  max-height: 50px;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

export const Box = styled.View`
  flex: 1;
  width: 85vh;
  max-height: 50vh;
  align-self: center;
  justify-content: center;
  background-color: ${theme.COLORS.CARD_MODAL};
  border-radius: 12px;
  border-width: 1px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
`
export const Message = styled.Text`
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
  font-size: ${theme.FONTS.SIZE.SMALL};
  color: ${theme.COLORS.TEXT_WARNING};
  text-align: justify;
`

export const MessageTitle = styled.Text`
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
  font-weight: 500;
  font-size: ${theme.FONTS.SIZE.SMALL};
  color: ${theme.COLORS.TEXT};
  text-align: center;
  padding: 8px;
  flex-wrap: wrap;
`

export const Title = styled.Text`
  font-family: ${theme.FONTS.TITLE_BOLD};
  font-weight: bold;
  font-size: ${theme.FONTS.SIZE.MEDIUM};
  color: ${theme.COLORS.TEXT};
  text-align: center;
  margin-top: 20px;
`
