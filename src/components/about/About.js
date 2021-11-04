import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SubHeader from "../SubHeader";
import Container from "../Container";

function About() {
  return (
    <Container>
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
        Great question! I build unique and stunning User Interface Designs in
        HTML, CSS, Bootstrap, Javascript, and React. My goal is the same for
        every project. To create a UI experience that will leave every user
        feeling great.
      </Text>
      <SubHeader>"Whats the Motivation here?"</SubHeader>
      <Text>
        How many times are you on a website and think "I'd love to find whoever
        designed this website and .... " ---- Well, you know the rest. I want to
        change that by bringing fresh ideas to the table that support your brand
        and build its identity. Something that catches the eye and illustrates
        the message you want your customers and clients to recieve.
      </Text>
    </Container>
  );
}

const Text = styled.p`
  font-size: 1rem;
  color: white;
  padding: 2rem 3rem 0 2rem;
  text-align: left;
  line-height: 1.7;
`;
export default About;
