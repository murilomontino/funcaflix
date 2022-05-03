import { RFValue } from 'react-native-responsive-fontsize'

import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: ${RFValue(7)}px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  color: #f2f2f2;
  padding: 4px;
`

export const Title = styled.Text`
  font-size: ${RFValue(8)}px;
  font-family: ${theme.FONTS.TITLE_900};
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  color: #f2f2f2;
  margin-block: 12px;
`

export const ContainerThumbnail = styled.View`
  margin: 4px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  -webkit-box-shadow: -2px 6px 19px rgba(0, 0, 0, 0.66);
  box-shadow: -2px 6px 19px rgba(0, 0, 0, 0.66);
`
