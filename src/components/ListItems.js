import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0px;
  max-width: 600px;
  margin: auto;
  margin-top: 30px;
`

const Item = styled.li`
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  &.done {
    text-decoration: line-through;
    color: #d0cfcf;
    button {
      color: #d0cfcf;
    }
  }
`

const Button = styled.button`
  border: 0px;
  background: 0px;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
`

const ListItems = ({ tasks, done, remove }) => (
  <Ul>
    {tasks.map( (item) => (
      <Item key={item.id} className={ item.done && 'done'}>
        { !item.done && <Button onClick={() => done(item.id) }><FaCheckCircle /></Button> }
        { item.done && <Button onClick={() => remove(item.id)}><FaTimesCircle /></Button> }
        {item.value}  
      </Item>
    ))}
  </Ul>
)

export default ListItems