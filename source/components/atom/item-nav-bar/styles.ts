import styled from 'styled-components'

type PropsText = {
  hover: boolean
  disabled: boolean
}

export const Text = styled.span<PropsText>`
  font-size: 0.9rem;
  color: #fff;
  font-weight: 700;
  font-variant: small-caps;
  ${({ disabled, hover }) => {
    if (!disabled && hover) {
      return `
      color: orange;
      font-weight: bold;
    `
    }
    if (disabled) {
      return `
      color: gray !important;
    `
    }
  }};
`
