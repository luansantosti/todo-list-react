import React from 'react'

const ListItems = ({ tasks }) => (
  <ul>
    {tasks.map( (item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

export default ListItems