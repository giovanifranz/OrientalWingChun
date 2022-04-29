import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --white: #F9FEFF;
  --black: #000;
  --gray: #E0E0E0;
  --purple: #753BBD;
  --green: #25D366;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (min-width: 1080px) {
    font-size: 93.75%;
  }
  @media (min-width: 768px) {
    font-size: 87.5%;
  }
  width: 100%;
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  background-color: var(--gray);
  color: var(--black);
  margin: 0;
  font-family: 'Saira', sans-serif;
  overflow-x: hidden;
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
}

#root {
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 768px;
  }
}

`
