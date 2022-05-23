import React from 'react'
import styled from 'styled-components'
import Phone from '../img/phone.png'
const Cotainer = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
`
const Right = styled.div`
       width: 50%;

`
const Feature = () => {
  return (
    <Cotainer>
        <Left></Left>
        <Right></Right>
    </Cotainer>
  )
}

export default Feature