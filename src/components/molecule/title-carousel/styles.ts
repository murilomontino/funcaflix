import theme from '@/theme'
import { MotiText } from 'moti'
import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 1rem;
  color: #fff;
  text-align: left;
  margin-left: 2rem;
  font-family: ${theme.FONTS.TITLE_BOLD};
  text-transform: uppercase;
`

export const SubTitle = styled(MotiText)`
  font-size: 0.8rem;
  align-self: center;
  color: #54b9c5;
  text-align: left;
  margin-left: 2rem;
  font-family: ${theme.FONTS.TITLE_BOLD};
  text-transform: uppercase;
`

export const ContainerText = styled.TouchableOpacity`
  flex-direction: row;
`

export const Container = styled.View`
  padding: 6px;
  background-color: ${theme.COLORS.BACKGROUND_TITLE};
  width: 100%;
`
