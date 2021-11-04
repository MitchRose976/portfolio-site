import React from "react";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import WelcomeMessage from "./components/home/WelcomeMessage";
import Headshot from "./components/home/Headshot";
import About from "./components/about/About";
import styled from "styled-components";
import './App.css';

function App() {
  return (
    <GridWrapper>
      {/* Navbar */}
      <Container area={"nav"}>
        <Navbar/>
      </Container>
      {/* Empty container for padding */}
      <Container area={"Content1"}/>
      {/* Welcome Message */}
      <Container area={"WelcomeMessage"}>
        <WelcomeMessage/>
      </Container>
      {/* Headshot */}
      <Container area={"Headshot"} className='headshot-container'>
        <Headshot/>
      </Container>
      {/* Empty container for padding */}
      <Container area='Content4' />
      {/* About */}
      <Container area='About' >
        <About/>
      </Container>
      {/* Projects */}
      <Container area="Projects">
        Projects
      </Container>
      {/* Contact */}
      <Container area='Contact'>
        Contact
      </Container>
      {/* Footer */}
      <Container area='Footer'>
        Footer
      </Container>
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
    "Footer Footer Footer Footer";
  grid-gap: 1rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 0.4fr 1fr 0.4fr;
    grid-template-rows: 0.6fr 3fr 3fr 3fr 3fr 3fr 1fr;
    grid-template-areas:
      "nav nav nav"
      "WelcomeMessage WelcomeMessage WelcomeMessage"
      "Content1 Headshot Content4"
      "About About About"
      "Projects Projects Projects"
      "Contact Contact Contact"
      "Footer Footer Footer";
  }
`;

export default App;
