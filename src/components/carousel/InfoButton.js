import styled from "styled-components";

const InfoButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: rgba(66, 16, 106, 0.7);
  ${"" /* border: 2px solid #9C0D38; */}
  border: 2px solid #42106A;
  color: white;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition-property: background, width, box-shadow, letter-spacing;
  transition-duration: 100ms;
  &:hover {
    background: rgba(66, 16, 106, 1);
    width: 11rem;
    box-shadow: 0.6rem 0.6rem 0.8rem black;
    letter-spacing: 1.5px;
  }
  @media only screen and (max-width: 768px) {
    width: 8rem;
    height: 1.8rem;
    font-size: 0.9rem;
    &:hover {
        width: 9rem;
        letter-spacing: 1.3px;
        box-shadow: 0.4rem 0.4rem 0.8rem black;
    }
  }
`;

export default InfoButton