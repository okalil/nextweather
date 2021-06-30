import styled from 'styled-components'

export const Form = styled.form`
  margin: 0 auto 0;
  height: 1.5rem;
  width: 10rem;
`

export const Input = styled.input`
  border: 0;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.searchBackground};
  color: ${props => props.theme.colors.textSecondary};
  padding-left: 10px;
  width: inherit;
  height: inherit;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`
