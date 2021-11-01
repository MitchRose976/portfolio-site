import styled from "styled-components";

export const Container = styled.div`
  text-align: ${(props) => props.alignment};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  border: 1px solid white;
  margin: 0;

  @media (max-width: 768px) {
      text-align: center;
  }
`;

export default Container;
