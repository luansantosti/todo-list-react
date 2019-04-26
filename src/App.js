import React from 'react';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
