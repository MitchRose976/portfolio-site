import React from "react";
import styled from "styled-components";
import logo from "./Headshot_bw3.png";
import Container from "../Container";

function Headshot() {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
}

// const ImageContainer = styled.div`
//   ${'' /* width: 23rem;
//   height: 30rem; */}
//   display: flex;
//   right: 15rem;
//   top: 4rem;
// `;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Headshot;
