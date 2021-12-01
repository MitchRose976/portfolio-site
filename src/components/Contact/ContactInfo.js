import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import ContactList from "./ContactList";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import ContactImage from "./ContactImage";
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
        <ContactImage />
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
  @media only screen and (max-width: 280px) {
    font-size: 1.7rem;
  }
`;

const ContactText = styled.h2`
  font-size: 1rem;
  opacity: 0.6;
  color: black;
  background-color: white;
  display: flex;
`;

const SubmitButton = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: var(--aqua);
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(72, 220, 202, 1), 0 0 0 0 rgba(66, 16, 106, 1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  $:after {
    content: "";
    width: 400px;
    height: 400px;
    position: absolute;
    top: -50px;
    left: -100px;
    background-color: var(--purple);
    background-image: linear-gradient(
      225deg,
      var(--aqua) 0%,
      var(--pink) 50%,
      var(--purple) 100%
    );
    z-index: -1;
    transition: transform 0.5 ease;
  }
`;

export default ContactInfo;
