import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import { FcBusinessContact } from "react-icons/fc";
import "../../App.css";


function ContactCard() {
  return (
    <Wrapper height="40rem" width="50%" className="contact-card">
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
        <FcBusinessContact className={"contact-icon"} />
        <ContactText>
          Feel free to contact me if you are need a new website built or if your
          team needs a new Front-End Developer!
        </ContactText>
        <input
          type="text"
          className="form-input"
          placeholder="Name:"
        ></input>
        <input
          type="email"
          className="form-input"
          placeholder="Email:"
        ></input>
        <textarea
          className="email-body"
          placeholder="Say hello..."
          name="comment[body]"
          rows="1"
          cols="60"
          wrap="physical"
          id="comment_text_area"
        ></textarea>
        {/* Contact Image  */}
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
  margin: 0rem 5rem 0rem 5rem;
  line-height: 2;
  text-align: center;
`;

export default ContactCard;
