import styled from 'styled-components'
import styledNative from 'styled-components/native'

export const Container2 = styled.div``

export const Container = styledNative.View`
  flex: 1;
  flex-direction: row;
  padding: 12px;
  margin-horizontal: 20px;
  margin-vertical: 8px;
  min-height: fit-content;
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

export const Details = styled.div`
	display: flex;
	flex: 4;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin-left: 16px;
`
