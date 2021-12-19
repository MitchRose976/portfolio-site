import styled from "styled-components";

const SubHeader = styled.h3`
  font-size: 1.8rem;
  color: #ffbcb5;
  margin-top: 2rem;
  font-style: italic;
  text-align: left;
  display: inline-block;
  position: relative;
  @media (max-width: 280px) {
    font-size: 1.6rem;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--aqua);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default SubHeader;
