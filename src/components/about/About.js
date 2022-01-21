import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SubHeader from "../SubHeader";
import Container from "../Container";

function About() {
  return (
    <Container padding="2rem 0 0 2rem">
      <Header>About</Header>
      <SubHeader>"So Who is this Mitch guy?"</SubHeader>
      <Text>
        Well I am glad you asked! I am a 25 year old front-end developer born
        and raised in Mississauga, Ontario. My passion for building and creating
        beatiful things lead me in to pursuing my career in front-end design and
        development. Coding became a love of mine because every single day I get
        to learn new things and challenge myself to become better at my craft.
        And really? What is better than that?
      </Text>
      <SubHeader>"What does he do?"</SubHeader>
      <Text>
        Great question! I build full-stack applications in
        HTML, CSS, Javascript, React, Node and MongoDB. Right now my focus is improving my skills with the MERN stack. My goal for every project is to create a simple UI/UX that will leave every user satisfied.
      </Text>
      <SubHeader>"Whats his Motivation?"</SubHeader>
      <Text>
        How many times are you on a website and think "I'd love to find whoever
        designed this website and .... " ---- Well, you know the rest. I want to
        change that by bringing fresh ideas to the table that support your brand or organization
        and build its identity. Lets grow together.
      </Text>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
  text-align: left;
  line-height: 1.7;
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
  @media (max-width: 280px) {
    font-size: 1.1rem;
  }
`;
export default About;
