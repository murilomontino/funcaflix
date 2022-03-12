import { Animated } from 'react-native'

import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
  background-color: ${theme.COLORS.CARD_BACKGROUND};
  padding: 8px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 4px;
  border-radius: 4px;
`
