import React from "react";
import Container from "../../Container";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import '../../../App.css';

function ContactCard() {
  return (
    <Wrapper>
      <Container
        height="70%"
        width="99%"
        borderRadius="20px"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        padding="1px"
        backgroundColor="white"
        backfaceVisibility="hidden"
        flexDirection="column"
      >
        <FcBusinessContact size={80} className={"contact-image"}/>
        <ContactLabel>Contact Me</ContactLabel>
      </Container>
    </Wrapper>
  );
}

const ContactImage = styled.img`
    width: 97%;
    height: 97%;
    border-radius: 20px;
    object-fit: cover;
    z-index: 10;
`

const ContactLabel = styled.h1`
    font-size: 2rem;
    text-align: center;
    
    display: flex;
`



export default ContactCard;
