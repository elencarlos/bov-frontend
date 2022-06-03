import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

  html {
    --white: #ffffff;
  }
  
  body {
    font-family: 'Roboto',sans-serif;
    text-decoration: none;
  }
`
