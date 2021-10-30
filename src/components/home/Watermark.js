import React from "react";
import styled from "styled-components";

function Watermark() {
  return (
    <>
      <WatermarkText>CSS / Javascript / React</WatermarkText>
    </>
  );
}

const WatermarkText = styled.p`
  font-size: 2rem;
  ${"" /* color: rgba(140, 255, 152, 1); */}
  color: rgba(162, 167, 165, 0.6);
  padding-left: 4rem;
`;

export default Watermark;
