import styled from "styled-components";

const ProjectLabel = styled.div`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  line-height: ${(props) => props.lineHeight};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  backface-visibility: hidden;
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  word-wrap: ${(props) => props.wordWrap};
  @media (max-width: 1024px) {
    line-height: 2;
  }
`;

export default ProjectLabel