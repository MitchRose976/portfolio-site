import React from "react";
import styled from "styled-components";
import logo from "./Headshot_bw3.png";

const Headshot = () => {
  return <Image src={logo} />;
};

const Image = styled.img`
  object-fit: cover;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid white;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
`;

export default Headshot;
