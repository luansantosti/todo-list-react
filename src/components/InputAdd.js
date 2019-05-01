import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Input = styled.input`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  border: 0px;
  outline: none;
  font-size: 20px;
  font-weight: 300;
`

const Search = ({ handleCreate }) => (
  <Wrapper>
    <Input onKeyUp={handleCreate} placeholder="Add a task"/>
  </Wrapper>
)

export default Search