import theme from '@/theme'
import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${(props) => props.color || theme.COLORS.TEXT_PRIMARY};
  margin: 2px;
  letter-spacing: 1;
  font-family: 'Inter900Black';
  font-size: 1.5rem;
  text-transform: lowercase;
  font-variant: small-caps;
`
