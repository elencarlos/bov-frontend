import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { COLORS } from '../constants/theme'

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

  html {
    --white: #ffffff;
    position: relative;
    min-height: 100%;
  }

  html,body{
    margin:0;
    padding:0;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  .leaflet-container {
    width: 100%;
    height: 50vh;
  }
`
