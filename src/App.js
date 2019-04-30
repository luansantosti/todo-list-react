import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import InputAdd from './components/InputAdd'
import ListItems from './components/ListItems'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`

function App() {
  const initialList = () => JSON.parse(localStorage.getItem('tasks')) || []
  const [listTasks, setListTasks] = useState(initialList);

  const handleCreate = (e) => {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER && e.target.value !== '') {
      const updatedList = [...listTasks, { value: e.target.value, id: Date.now(), done: false }]
      updateList(updatedList)
      e.target.value = ''
    }
  }

  const handleRemove = (id) => {
    const updatedList = listTasks.filter(item => item.id !== id)
    updateList(updatedList)
  }

  const handleDone = (id) => {
    const updatedList = listTasks.map(item => item.id === id ? {...item, done: true} : item)
    updateList(updatedList)
  }

  const updateList = (updatedList) => {
    setListTasks(updatedList)
    localStorage.setItem("tasks", JSON.stringify(updatedList))
  }

  return (
    <div className="App">
      <GlobalStyle />
      <InputAdd handleCreate={handleCreate}/>
      <ListItems tasks={listTasks} remove={handleRemove} done={handleDone}/>
    </div>
  );
}

export default App;
