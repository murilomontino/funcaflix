import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 12px;
`

export const InputFile = styledWeb.input.attrs({
  type: 'file',
})`
  display: none;
`
