import React from "react";
import styled from "styled-components";

const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.button`
    text-align: ${(props) => props.alignment};
    position: relative;
    border: 1px solid white;
`;

export default Container;
