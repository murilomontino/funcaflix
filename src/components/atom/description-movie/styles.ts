import theme from '@/theme'
import styled from 'styled-components/native'

export const Text = styled.Text`
  padding-block: 1rem;
  padding-inline: 1vw;
  color: ${theme.COLORS.TEXT};
  font-size: calc(6px + 0.5vw);
  text-align: justify;
  line-height: 1vw;
`
