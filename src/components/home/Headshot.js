import React from "react";
import styled from "styled-components";
import logo from "./Headshot_bw3.png";
import Container from "../Container";

const Headshot = () => {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
};

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`;

export default Headshot;
