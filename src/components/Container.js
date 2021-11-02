import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  color: white;
  grid-area: ${(props) => props.area};

  @media (max-width: 768px) {
      text-align: center;
  }
`;

export default Container;
