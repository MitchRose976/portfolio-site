import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import ContactList from "./ContactList";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import "../../App.css";

function ContactInfo() {
  return (
    <Wrapper className="contact-card-white">
      <Container
        position="relative"
        overflow="hidden"
        backgroundColor="white"
        backfaceVisibility="hidden"
        flexDirection="column"
        padding="1rem 1rem 1rem 2rem"
        className="contact-info"
      >
        <ContactLabel>
          Contact Me
          <FcBusinessContact className={"contact-icon"} />
        </ContactLabel>
        <ContactText>Contact me below if you want to chat!</ContactText>
        <ContactList />
      </Container>
    </Wrapper>
  );
}

const ContactLabel = styled.h1`
  font-size: 2.3rem;
  text-align: center;
  color: black;
  background-color: white;
  display: flex;
  @media (max-width: 750px) {
    color: black;
    background-color: white;
    font-size: 2rem;
  }
  @media (max-width: 280px) {
    font-size: 1.7rem;
  }
`;

const ContactText = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: black;
  background-color: transparent;
  display: flex;
  @media (max-width: 750px) {
    color: black;
    font-size: 1.4rem;
  }
`;


export default ContactInfo;
