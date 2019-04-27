import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import Search from './components/Search'
import ListItems from './components/ListItems'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`

function App() {
  const [listTasks, setListTasks] = useState([]);

  function handleKeyUp(e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER && e.target.value != '') {
      setListTasks([...listTasks, e.target.value])
      e.target.value = ''
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Search handleKeyUp={handleKeyUp}/>
      <ListItems tasks={listTasks}/>
    </div>
  );
}

export default App;
