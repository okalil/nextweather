import styled from 'styled-components'

export const Form = styled.form`
  height: 2em;
  width: clamp(20vw, 250px, 50vw);

  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const Input = styled.input`
  border: 0;
  border-radius: 1em;
  background-color: ${props => props.theme.colors.searchBackground};
  color: inherit;
  padding-left: 10px;
  width: inherit;
  height: inherit;

  font-size: 1em;

  &::-webkit-input-placeholder {
    color: inherit;
  }
`
