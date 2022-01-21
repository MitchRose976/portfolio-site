import React from "react";
import Container from "../Container";
import styled from "styled-components";
import "../../App.css";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

function Footer() {
  return (
    <Container
      width="100%"
      position="relative"
      color="white"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="row"
    >
      {/* Logo */}
      <FooterLogo href="#home">MR</FooterLogo>
      {/* Links */}
      <FooterList>
        <FooterListItem>
          <FooterLink href="#about">About</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#projects">Projects</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterListItem>
      </FooterList>
      {/* Media */}
      <MediaList>
        <MediaListItem>
          <FooterLink href="https://github.com/MitchRose976">
            <VscGithubInverted
              color="white"
              className="media-icons"
              size={30}
            />
          </FooterLink>
        </MediaListItem>
        <MediaListItem>
          <FooterLink href="https://www.linkedin.com/in/mitchell-rose-2733a9120/">
            <BsLinkedin color="#0e76a8" className="media-icons" size={30} />
          </FooterLink>
        </MediaListItem>
      </MediaList>
    </Container>
  );
}

const FooterLogo = styled.a`
  font-size: 4rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: var(--aqua);
  }
  @media only screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

// Footer Page Links
const FooterList = styled.ul`
  color: white;
  list-style: none;
`;

const FooterListItem = styled.li`
  color: white;
  text-decoration: none;
  display: inline;
  margin: 0 4rem;
  @media only screen and (max-width: 1100px) {
    margin: 0 3rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
  @media only screen and (max-width: 550px) {
    margin: 1rem 1rem;
    display: block;
  }
`;

// Footer Media Links
const MediaList = styled.ul`
  color: white;
  list-style: none;
`;

const MediaListItem = styled.li`
  color: white;
  text-decoration: none;
  padding: 1rem 0;
`;

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    color: var(--aqua);
  }
  @media only screen and (max-width: 1100px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export default Footer;
