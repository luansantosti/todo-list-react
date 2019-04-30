import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 10px 15px;
  width: 200px;
`

const Search = ({ handleCreate }) => (
  <Input onKeyUp={handleCreate} placeholder="Adicione uma tarefa"/>
)

export default Search