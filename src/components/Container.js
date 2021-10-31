import styled from "styled-components";

export const Container = styled.div`
  text-align: ${(props) => props.alignment};
  position: relative;
  border: 1px solid white;
  margin: 0;

  @media (max-width: 768px) {
      text-align: center;
  }
`;

export default Container;
