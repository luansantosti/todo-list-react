import React from 'react'
import styled from 'styled-components'

const StyledWeekday = styled.h5`
  color: #6b182c;
  margin-top: 10px;
  text-align: center;
  font-weight: 300;
`

const Weekday = () => {
  const date = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
  const today = weekday[date.getDay()];
  return <StyledWeekday>{today}</StyledWeekday>
}

export default Weekday