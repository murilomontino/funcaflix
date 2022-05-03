import styled, { css } from 'styled-components/native'

type Props = {
  fontSize?: number | string
  color?: string
  textVisible?: boolean
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  padding: 12px;
  margin-right: 4px;
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text<Props>`
  color: ${(props: Props) => props.color || '#fff'};
  padding: 8px;
  font-size: ${(props: Props) => props.fontSize || '1rem'};
  font-weight: bold;

  ${(props: Props) =>
    !props.textVisible &&
    css`
      display: none;
    `}
`
