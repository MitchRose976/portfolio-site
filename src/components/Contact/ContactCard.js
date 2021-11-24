import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import "../../App.css";

function ContactCard() {
  return (
    <Wrapper height="80%" width="50%">
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
        <ContactLabel>Contact Me</ContactLabel>
        <FcBusinessContact className={"contact-image"} />
        <ContactText>
          Feel free to contact me if you are need a new website built or if your
          team needs a new Front-End Developer!
        </ContactText>
        <input type="email" className="email-form" placeholder="Email:"></input>
      </Container>
    </Wrapper>
  );
}

const ContactLabel = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  background-color: white;
  display: flex;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  display: block;
  color: black;
  background-color: white;
  margin: 0rem 1rem 0rem 1rem;
  line-height: 2;
`;


export default ContactCard;