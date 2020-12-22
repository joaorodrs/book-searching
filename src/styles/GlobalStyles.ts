import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand';
    font-weight: 500;

    ::selection {
      background: rgba(247,176,2,.5)
    }
  }

  button, input {
    background: none;
    border: 0;
    outline: 0;
  }

  :root {
    --background-color: #333
  }
`