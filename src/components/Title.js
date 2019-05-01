import React from 'react'
import Weekday from './Weekday'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #EFEFEF; 
  text-align: center;
  font-size: 45px;
  font-weight: 100;
  margin-bottom: 0px;
`

const Title = () => (
  <div>
    <StyledTitle>
      Hey, what's up today?
    </StyledTitle>
    <Weekday />
  </div>
)

export default Title