import React from "react";
import styled from "styled-components";
import Headshot from "./Headshot";
import WelcomeMessage from "./WelcomeMessage";
import Container from "../Container";

const Home = () => {
  return (
    <Landing>
      <Container alignment={"left"}>
        <WelcomeMessage />
      </Container>
        <Headshot />
    </Landing>
  );
};

const Landing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  justify-content: space-around;
  border: 1px solid white;
  margin-top: 7rem;
`;

export default Home;
