import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes'
const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px; 
`


const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`
const Desc = styled.p`
    width: 60%;
    font-size: 20px; 
    margin-top: 20px;
`
const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`
const Right = styled.div`
    width: 40%;

`

const Image = styled.img`
    width: 100%;
`
const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventure in creative age</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat magnam blanditiis qui voluptas laborum, repellat atque. In debitis a vel animi, ipsum maiores quis tempore vitae fugiat amet harum.</Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call us (+234) 706-8513-219</Phone>
                    <ContactText>For more information</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={Woman} />
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro