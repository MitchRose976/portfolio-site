import styled from "styled-components";

export const Container = styled.div`
  ${'' /* border: 1px solid white;  */}
  color: white;
  grid-area: ${(props) => props.area};
  margin: ${(props) => props.margin};
  margin: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  classname: ${(props) => props.className};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: ${(props) => props.position};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  overflow: ${(props) => props.overflow};
  box-shadow: ${(props) => props.boxShadow};
  backface-visibility: ${(props) => props.backfaceVisibility};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  border-top: ${(props) => props.borderTop};
  
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export default Container;
