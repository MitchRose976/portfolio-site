import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SubHeader from "../SubHeader";
import Container from "../Container";

function About() {
  return (
    <Container padding="2rem">
      <Header>About</Header>
      <SubHeader>"So Who is this Mitch guy?"</SubHeader>
      <Text>
        Well I am glad you asked! I am a full stack developer born
        and raised in Mississauga, Ontario. My passion for building and creating
        awesome things lead me in to pursuing my career in coding. Coding became a love of mine because every single day I get
        to learn new things and challenge myself to become better at my craft.
        And really? What is better than that?
      </Text>
      <SubHeader>"What does he do?"</SubHeader>
      <Text>
        Great question! I build full-stack applications in
        HTML, CSS, Javascript, React, Node, Express and MongoDB. Right now my focus is improving my skills with the MERN stack. My goal for every project is to write clean, simple, and efficient code that will make the end user's experience amazing.
      </Text>
      <SubHeader>"Whats his Motivation?"</SubHeader>
      <Text>
        My goal in this career is to continue to learn and grow every single day and become better at my craft. I love writing code and want to be the best that I can and contribute to projects that I am passionate about. Eventually I want to be a senior tech and lead my own team so I will have the chance to teach others and support them on their journey as well. 
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
