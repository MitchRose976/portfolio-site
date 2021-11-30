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
        backgroundColor="var(--purple)"
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
    background-image: linear-gradient(225deg, var(--aqua) 0%, var(--pink) 50%, var(--purple) 100%);
    z-index: -1;
    transition: transform 0.5 ease;
  }
`;

export default ContactForm;
