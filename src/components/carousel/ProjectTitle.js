import styled from "styled-components";

const ProjectTitle = styled.h2`
  margin: 0 auto;
  background-color: white;
  font-size: 2rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

export default ProjectTitle