import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.generalBackground};
    font: 400 16px Roboto, sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem
  }
`
