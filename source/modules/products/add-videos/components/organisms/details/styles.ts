import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95vw;
  align-self: center;
  margin: 20px;
  background-color: ${theme.COLORS.BACKGROUND_FRONTEND};
  padding: 12px;
  border-radius: 10px;
`

export const ContainerRight = styled.View`
  width: 70%;
  justify-content: center;
  align-items: center;
`
