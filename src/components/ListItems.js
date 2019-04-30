import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  &.done {
    text-decoration: line-through;
  }
`

const ListItems = ({ tasks, done, remove }) => (
  <ul>
    {tasks.map( (item) => (
      <Item key={item.id} className={ item.done && 'done'}>
        {item.value}  
        { !item.done && <button onClick={() => done(item.id) }>Ok</button> }
        { item.done && <button onClick={() => remove(item.id)}>X</button> }
      </Item>
    ))}
  </ul>
)

export default ListItems