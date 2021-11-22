import styled from "styled-components";

const Wrapper = styled.div`
  height: 80%;
  width: 50%;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  position: relative;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1rem 1rem 1rem black;
  @media only screen and (max-width: 1300px) {
    height: 85%;
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    height: 95%;
    width: 75%;
  }
`;

export default Wrapper