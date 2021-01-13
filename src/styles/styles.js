import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    color: #111;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;

    &:visited {
      color: #111;
    }
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
