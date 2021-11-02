import React from "react";
//import Home from './components/home/Home';
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import WelcomeMessage from "./components/home/WelcomeMessage";
import Headshot from "./components/home/Headshot";
import styled from "styled-components";

function App() {
  return (
    <GridWrapper>
      <Container area={"nav"}>
        <Navbar/>
      </Container>
      <Container area={"Content1"}/>
      <Container area={"WelcomeMessage"}>
        <WelcomeMessage/>
      </Container>
      <Container area={"Headshot"}>
        <Headshot/>
      </Container>
      <div
        style={{
          gridArea: "Content4",
          border: "1px solid white",
          color: "white",
        }}
      >
        Content 4
      </div>
      <div
        style={{ gridArea: "About", border: "1px solid white", color: "white" }}
      >
        Content 6
      </div>
      <div
        style={{
          gridArea: "Projects",
          border: "1px solid white",
          color: "white",
        }}
      >
        Projects
      </div>
      <div
        style={{
          gridArea: "Contact",
          border: "1px solid white",
          color: "white",
        }}
      >
        Contact
      </div>
      <div
        style={{
          gridArea: "footer",
          border: "1px solid white",
          color: "white",
        }}
      >
        Footer
      </div>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  height: 200vh;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.6fr 3fr 3fr 3fr 3fr 1fr;
  justify-content: space-between;
  grid-template-areas:
    "nav nav nav nav"
    "Content1 WelcomeMessage Headshot Content4"
    "Content1 About About Content4"
    "Content1 Projects Projects Content4"
    "Content1 Contact Contact Content4"
    "footer footer footer footer";
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 0.4fr 1fr 0.4fr;
    grid-template-rows: 0.6fr 3fr 3fr 3fr 3fr 3fr 1fr;
    grid-template-areas:
      "nav nav nav"
      "WelcomeMessage WelcomeMessage WelcomeMessage"
      "Content1 Headshot Content4"
      "About About About"
      "Projects Projects Projects"
      "Contact Contact Contact"
      "footer footer footer";
  }
`;

export default App;
