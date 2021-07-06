import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 0.5em;
  padding: 1em 1.25em;
  background: ${({ theme }) => theme.colors.generalCardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 25%);

  width: clamp(50vw, 550px, 100%);

  @media only screen and (min-height: 1024px) {
    font-size: 120%;
  }

  @media only screen and (min-width: 1366px), (min-height: 1366px) {
    font-size: 125%;
  }
`
