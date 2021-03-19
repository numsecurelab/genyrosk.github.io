import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    /* transition: all 100ms ease; */
  }

  html, body {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 16px;
    /* font-family: Roboto; */
    /* height: 100%;
    width: 100%; */
  }

  @media all and (max-width: 460px){
    html, body {
      font-size: 14px;
    }
  }
`
