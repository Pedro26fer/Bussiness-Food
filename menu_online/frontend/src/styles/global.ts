import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #fff;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: beige;
    color: #ff0f2e;
    height: 50%;
    box-shadow: 0px 6px 2px #a9a9a9;
    height:3rem
  }

  button:hover {
    border-color: #ffa20f
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  input:focus{
    outline: 1px solid #ffa20f
  }


`
