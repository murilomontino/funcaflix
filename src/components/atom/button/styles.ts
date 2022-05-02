import theme from '@/theme'
import styled, { css } from 'styled-components/native'

type Props = {
  selectable?: boolean
  selected?: boolean
  backgroundColor?: string
}

export const Container = styled.TouchableOpacity<Props>`
  height: 50px;
  max-width: 60vh;
  margin: 8px;
  border-width: 2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  justify-content: center;
  align-items: center;
  align-self: center;

  background-color: ${(props: Props) => props.backgroundColor};

  ${(props: Props) =>
    props.selectable &&
    css`
      background-color: ${props.selected ? props.backgroundColor : theme.COLORS.BUTTON_INATIVE};
    `}
`

export const Text = styled.Text`
  color: ${theme.COLORS.TEXT};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
