import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import "../../App.css";

function ContactForm() {
  return (
    <Wrapper className="contact-card-purple">
      <Container
        position="relative"
        overflow="hidden"
        backfaceVisibility="hidden"
        padding="1rem 1rem 1rem 2rem"
        className="contact-form"
      >
        <ContactLabel>
          Send Me A Message
        </ContactLabel>
        <label className="form-label">
          <span>Name</span>
        </label>
        <input type="text" className="form-input"></input>
        <label className="form-label">
          <span>Email</span>
        </label>
        <input type="email" className="form-input"></input>
        <label className="form-label">
          <span>Message</span>
        </label>
        <textarea
          className="email-body"
          name="comment[body]"
          rows="1"
          cols="60"
          wrap="physical"
          id="comment_text_area"
        ></textarea>
        <SubmitButton>Submit</SubmitButton>
      </Container>
    </Wrapper>
  );
}

const ContactLabel = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
  font-weight: 100;
  background-color: var(--purple);
  display: flex;
`;

const SubmitButton = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  overflow: hidden;
  border: 3px solid white;
  transition: all .5s ease;
  &:hover {
    color: black;
    background-color: var(--aqua);
    border: 3px solid var(--aqua);
  }
`;

export default ContactForm;
