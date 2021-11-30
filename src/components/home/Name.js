import styled from "styled-components";

const Name = styled.h2`
  font-size: 4.5rem;
  color: #ffbcb5;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    font-size: 5rem;
    padding-left: 0;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    padding-left: 2rem;
  }
`;

export default Name;
