import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import WelcomeMessage from "./components/home/WelcomeMessage";
import Headshot from "./components/home/Headshot";
import About from "./components/about/About";
import styled from "styled-components";
import AboutBackground from './components/about/coding.jpeg';
import './App.css';
import Footer from "./components/Footer/footer";
// import ContactBanner from "./components/Contact/ContactBanner";
import Contact from "./components/Contact/Contact";
import BootstrapCarousel from "./components/carousel/Carousel"

function App() {

  return (
    <GridWrapper>
      {/* Navbar */}
      <Container area={"nav"} id="home">
        <Navbar/>
      </Container>
      {/* Empty container for padding */}
      <Container area={"Content1"}/>
      {/* Welcome Message */}
      <Container area={"WelcomeMessage"} id="welcome">
        <WelcomeMessage/>
      </Container>
      {/* Headshot */}
      <Container area={"Headshot"} className='headshot-container'>
        <Headshot/>
      </Container>
      {/* Empty container for padding */}
      <Container area='Content4'/>
      {/* About */}
      <Container area='About' id="about">
        <About/>
      </Container>
      {/* Projects */}
      <Container area="Projects" className="carousel" id="projects">
        <BootstrapCarousel/>
      </Container>
      {/* Contact */}
      <Container area='Contact' id="contact" display='flex' alignItems='center' justifyContent='center' id="contact">
        <Contact/>
      </Container>
      {/* Footer */}
      <Container area='Footer'>
        <Footer/>
      </Container>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  height: 200vh;
  max-width: 200vh;
  background: var(--background);
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.6fr 3fr 3fr 3fr 3fr 1fr;
  justify-content: space-between;
  grid-template-areas:
    "Content1 nav nav Content4"
    "Content1 WelcomeMessage Headshot Content4"
    "Content1 About About Content4"
    "Content1 Projects Projects Content4"
    "Content1 Contact Contact Content4"
    "Content1 Footer Footer Content4";
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