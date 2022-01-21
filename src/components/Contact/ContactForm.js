import React from "react";
import Container from "../Container";
import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import "../../App.css";

function ContactForm() {
  return (
    <Wrapper className="contact-card-purple">
      <form
        className="contact-form"
        action="https://formsubmit.co/mitch.j.rose@outlook.com"
        method="POST"
      >
        <ContactLabel>Send Me A Message</ContactLabel>
        <label className="form-label">
          <span>Name</span>
        </label>
        <input type="text" name="name" className="form-input" required></input>
        <label className="form-label">
          <span>Email</span>
        </label>
        <input type="email" name="email" className="form-input" required></input>
        <input type="hidden" name="_autoresponse" value="Thank you so much for reaching out! We will be in touch shortly. Feel free to call me at 416-779-2166."></input>
        <label className="form-label">
          <span>Message</span>
        </label>
        <textarea
          className="email-body"
          type="text"
          name="message"
          rows="1"
          cols="60"
          wrap="physical"
          id="comment_text_area"
        ></textarea>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
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
  color: black;
  font-size: 1rem;
  overflow: hidden;
  border: 3px solid var(--aqua);
  transition: all 0.5s ease;
  &:hover {
    color: black;
    background-color: var(--aqua);
    border: 3px solid var(--aqua);
  }
`;

export default ContactForm;
