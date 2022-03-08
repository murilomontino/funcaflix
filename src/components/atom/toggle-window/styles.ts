import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerIcon = styled.View`
  top: 5;
  padding-top: 10px;
  padding-left: 4px;
  padding-right: 4px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  height: 20px;
`

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.COLORS.TEXT};
  margin-left: 4px;
  padding-right: 4px;
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.COLORS.TEXT};
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
`
