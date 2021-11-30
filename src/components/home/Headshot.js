import React from "react";
import styled from "styled-components";
import logo from "../../images/Headshot_bw3.png";

const Headshot = () => {
  return <Image src={logo} />;
};

const Image = styled.img`
  object-fit: cover;
  width: auto;
  max-width: 100%;
  max-height: 80%;
  justify-content: center;

  @media (max-width: 500px) {
    max-height: 100%;
  }
`;

export default Headshot;
