import styled from 'styled-components/native'

import colors from '@/global/colors'

export const ContainerInformation = styled.View`
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  padding: 4px;
`

export const ContainerDate = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  font-weight: bold;
  text-align-vertical: center;
  color: ${colors.grey20};
  margin: 2px;
  letter-spacing: 1;
  font-size: 12px;
`


