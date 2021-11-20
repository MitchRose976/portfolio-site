import React from "react";
import Container from "../Container";
import styled from "styled-components";
import '../../App.css';
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

function Footer() {
  return (
    <Container width="100%" position="relative" color="white" borderTop="2px solid white">
      {/* Logo */}
      <FooterLogoDiv>
        <FooterLogo>MR</FooterLogo>
      </FooterLogoDiv>
      {/* Links/Media Container */}
      <Container
        width="70%"
        height="10rem"
        display="flex"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        right="0"
      >
        {/* Links */}
        <FooterList>
          <FooterListItem>
            <FooterLink>About</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>Projects</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink>Contact</FooterLink>
          </FooterListItem>
        </FooterList>
        {/* Media */}
        <MediaList>
          <MediaListItem>
            <FooterLink>
              <VscGithubInverted color="white" className="media-icons" />
            </FooterLink>
          </MediaListItem>
          <MediaListItem>
            <FooterLink>
              <BsLinkedin color="#0e76a8" className="media-icons" />
            </FooterLink>
          </MediaListItem>
          <MediaListItem>
            <FooterLink>
              <GrFacebook color="#3b5998" className="media-icons" />
            </FooterLink>
          </MediaListItem>
        </MediaList>
      </Container>
    </Container>
  );
}

const FooterLogoDiv = styled.div`
  width: 30%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border-top: 1px solid red; */}
  color: white;
  position: absolute;
  left: 0;
`;

const FooterLogo = styled.h1`
  font-size: 4rem;
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
  margin-right: 8rem;
  @media only screen and (max-width: 1024px) {
    margin-right: 6rem;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 3rem;
  }
  @media only screen and (max-width: 500px) {
    padding-bottom: 0.8rem;
    display: block;
  }
`;

// Footer Media Links
const MediaList = styled.ul`
  color: white;
  list-style: none;
  margin-left: 5rem;
  @media only screen and (max-width: 1024px) {
    margin-left: 5rem;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 2rem;
  }
  @media only screen and (max-width: 500px) {
    margin-left: 2.5rem;
  }
  @media only screen and (max-width: 320px) {
    margin-left: 1rem;
  }
`;

const MediaListItem = styled.li`
  color: white;
  text-decoration: none;
  padding-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export default Footer;
