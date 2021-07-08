import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --general-card-bg: #fff; //white
    --header-bg: #368ca9; //blue-300
    --current-card-bg: #338eaa; //blue-400

    --general-bg: #046f94; //blue-500
    --search-bg: #046485; //blue-600

    --text-primary: #000;
    --text-secondary: #f2f2f2;
    --text-tertiary: #00aaf0; //blue

    --border-color: #d9d9d9; //gray-light-medium
    --button-inactive: #72aec3;
  }

  html {
    font-size: 87.5%; //14px

    @media (min-width: 720px) {
      font-size: 93.75%; //15px
    }

    @media (min-width: 1080px) {
      font-size: 100%; //16px
    }

    @media (min-width: 1366px) {
      font-size: 125%; //20px
    }


  }

  body {
    background: ${({ theme }) => theme.colors.generalBackground};
    font: 400 1rem Roboto, sans-serif;

    &[data-theme='dark'] {
      --general-bg: #222;
      --header-bg: #333;
      --search-bg: #222;
      --general-card-bg: #333;
      --current-card-bg: #333;

      --text-primary: #f2f2f2;
      --text-secondary: #f2f2f2;
      --text-tertiary: #444;

      --border-color: #222;
      --button-inactive: #444;

      --filter-invert: invert(1);
      --filter-contrast: contrast(0.75)
    }
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.25em
  }
`
