import { Animated } from 'react-native'

import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const About = styled(Animated.Text)`
  padding: 0px 20px;
  font-size: 12px;
  color: ${theme.COLORS.TEXT};
  font-family: ${theme.FONTS.TITLE_SEMI_BOLD};
  text-align: justify;
  text-indent: 20px;
`

export const ContainerAbout = styled(Animated.View)`
  background-color: ${theme.COLORS.CARD_BACKGROUND};
  padding: 8px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 4px;
  border-radius: 4px;
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
