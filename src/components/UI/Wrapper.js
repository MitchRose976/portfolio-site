import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  position: relative;
  flex-direction: ${(props) => props.flexDirection};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
  @media only screen and (max-width: 1300px) {
    height: 85%;
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    height: 95%;
    width: 75%;
  }
`;

export default Wrapper;
