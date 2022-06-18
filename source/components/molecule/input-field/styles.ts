import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styledWeb.div`
  position: relative;
  display: flex;
  min-height: fit-content;
  flex-direction: column;
  margin: 8px;
  width: 100%;
  //outlineOffset: ? NumberOrString;
  //outlineStyle: ? string;
`

export const ContainerIcon = styled.View`
  background-color: ${theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  border-width: 0.4px;
  border-left: 0;
  padding-right: 4px;
`

export const TopicRequered = styled.Text`
  margin-top: 8px;
  font-weight: bold;
  font-size: ${theme.FONTS.SIZE.SMALL};
  text-align: right;
  padding-left: 0px;
  color: ${theme.COLORS.IMPORTANT};
`

export const TopicForm = styled.Text`
  font-weight: bold;
  color: ${theme.COLORS.TEXT};
  padding: 4px 4px 0px 0px;
  text-align: right;
`
export const Field = styledWeb.input`
  flex: 4;
  color: ${theme.COLORS.BORDER_BUTTON};
  background-color: ${theme.COLORS.BACKGROUND_INPUT};
  font-weight: 500;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
`
