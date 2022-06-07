import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  z-index: 1;
  padding: 4px;
  min-height: 150px;
  max-height: auto;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.COLORS.TEXT};
  padding: 4px;
  margin: 4px 0;
  text-align: center;
`

export const Legends = styled.Text`
  font-size: 0.85rem;
  color: ${theme.COLORS.TEXT};
  padding: 4px;
  margin: 4px 0;
  text-align: center;
`

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
`
