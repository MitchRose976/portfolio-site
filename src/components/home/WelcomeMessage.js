import React from "react";
import styled from "styled-components";
import Watermark from "./Watermark.js";
import Name from "./Name.js";
import Container from "../Container.js";

const WelcomeMessage = () => {
  return (
    <Container backgroundColor="transparent">
      <Text style={{ marginTop: "5rem" }}>Hey there!</Text>
      <Name>I'm Mitch,</Name>
      <Text>Your next Front-End Developer.</Text>
      <Watermark>CSS / Javascript / React</Watermark>
      <Button><Link href="#contact">Lets Chat</Link></Button>
    </Container>
  );
}

const Text = styled.h2`
  font-size: 3rem;
  color: white;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    padding-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    padding-left: 1.2rem;
  }
`;

const Button = styled.button`
  font-size: 1.3rem;
  color: #ffbcb5;
  margin: 3rem 0 0 2rem;
  padding: 0 0 5px 0;
  width: 10rem;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 rgba(255, 188, 181, 0.7);
  border: 3px solid #ffbcb5;
  transition: ease-out 0.3s;

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
    width: 13rem;
    height: 3rem;
    font-size: 1.5rem;
    transition: ease-out 0.25s;
  }

  &:hover {
    box-shadow: inset 10rem 0 0 0 rgba(255, 188, 181, 0.7);
    color: white;
    @media (max-width: 1024px) {
      box-shadow: inset 15rem 0 0 0 rgba(255, 188, 181, 0.7);
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  background: transparent;
  color: var(--pink);
  &:hover {
    color: white;
  }
`

export default WelcomeMessage;
