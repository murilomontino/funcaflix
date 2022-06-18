import styled from 'styled-components/native'

export const Card = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 12px;
  margin-horizontal: 20px;
  margin-vertical: 8px;
  min-height: 300px;
  background-color: #fff;
  elevation: 5;
  shadow-color: #fff;
  shadow-off-set: {
    width: 1px;
    height: 2px;
  }
  shadow-opacity: 0.4;
  shadow-radius: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerImage = styled.View``
