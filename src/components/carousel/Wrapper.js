import styled from "styled-components";

const Wrapper = styled.div`
  height: 70%;
  width: 50%;
  position: relative;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1rem 1rem 1rem black;
  @media only screen and (max-width: 1024px) {
    height: 90%;
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    height: 95%;
    width: 65%;
  }
`;

export default Wrapper