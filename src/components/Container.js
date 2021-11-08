import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  color: white;
  grid-area: ${(props) => props.area};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  classname: ${(props) => props.className};
  

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export default Container;
