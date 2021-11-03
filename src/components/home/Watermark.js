import styled from "styled-components";

const Watermark = styled.p`
  font-size: 2rem;
  color: rgba(162, 167, 165, 0.6);
  padding-left: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.7rem;
    padding-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-left: 1.2rem;
  }
`;

export default Watermark;
