import styled from 'styled-components'
import styledNative from 'styled-components/native'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 425px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 4px;
`

export const ContainerButtonClose = styledNative.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  padding: 4px;
  margin: 4px;
  margin-right: 12px;
  
`
