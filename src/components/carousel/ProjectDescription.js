import styled from "styled-components";

const ProjectDescription = styled.p`
  margin: 0 auto;
  background-color: white;
  font-size: 1.2rem;
  @media only screen and (max-width: 1300px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 411px) {
    font-size: 0.8rem;
  }
`;

export default ProjectDescription;