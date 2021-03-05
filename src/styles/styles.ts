import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000f;
    --oxford-blue: #14213dff;
    --orange-web: #fca311ff;
    --platinum: #e5e5e5ff;
    --white: #ffff;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(---white);
    color: var(--black);
    font-family: sans-serif;
  }

  a {
    text-decoration: none;

    &:link { color: var(--oxford-blue); }
    &:hover { color: var(----orange-web); }
    &:visited { color: var(--oxford-blue); }
    &:active { color: var(--oxford-blue); }
  }

  ul,
  ol {
    margin: 0 0 0 1rem;
    padding: 0 0 0 1rem;
  }

  table {
    border-collapse: collapse;
  }

  th {
    text-align: left;
  }

  td {
    vertical-align: middle;
  }
`
export default GlobalStyle
