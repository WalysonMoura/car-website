import { createGlobalStyle } from 'styled-components'

export const  GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


export const theme = {
    light: {
      primary: '#0070f3',
    },
    dark:{
        primary: '#0070f3'
    }
  }