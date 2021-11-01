import React from "react";
import styled from "styled-components";
import Watermark from "./Watermark.js";
import Name from "./Name.js";
import Container from "../Container.js";

function WelcomeMessage() {
  return (
    <Container style={{border: '1px solid white;'}}>
      <Text style={{ marginTop: "5rem" }}>Hey there!</Text>
      <Name>I'm Mitch,</Name>
      <Text>Your next Front-End Developer.</Text>
      <Watermark>CSS / Javascript / React</Watermark>
      <Button>Lets Chat</Button>
    </Container>
  );
}

const Text = styled.h2`
  font-size: 2.5rem;
  color: white;
  padding-left: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1.2rem;
  }
`;

const Button = styled.button`
  font-size: 1.3rem;
  color: #ffbcb5;
  margin: 3rem 0 0 4rem;
  padding: 5px;
  width: 10rem;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 rgba(255, 188, 181, 0.7);
  border: 3px solid #ffbcb5;
  transition: ease-out 0.3s;

  @media (max-width: 768px) {
      margin-right: 3.2rem;
  }

  &:hover {
    box-shadow: inset 10rem 0 0 0 rgba(255, 188, 181, 0.7);
    color: white;
  }
`;

export default WelcomeMessage;
