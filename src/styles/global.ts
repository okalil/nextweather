import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%; //14px

    @media (min-width: 720px) {
      font-size: 93.75%; //15px
    }

    @media (min-width: 1080px) {
      font-size: 100%; //16px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.generalBackground};
    font: 400 1rem Roboto, sans-serif;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.25em
  }
`
