import React from 'react'
import styled from "styled-components";
import Container from '../Container'
import Pic from './pic1.jpg';


const ImageCard = () => {
    return (
        <Container height="70%" width="50%" position="relative" borderRadius="20px" backgroundColor="#C5D1D3">
            <Container  height="70%" borderRadius="20px" position="relative" display="flex" justifyContent="center" alignItems="center" overflow="hidden" margin="2rem 2rem 5rem 2rem">
            <ProjectImage src={Pic}/>
            </Container>
            <ProjectLabel>
                <ProjectTitle>Project 1</ProjectTitle>
                <ProjectDescription>This is a project about my favourite tabletop strategy game</ProjectDescription>
            </ProjectLabel>
        </Container>
    )
}

const ProjectImage = styled.img`
    max-width: 100%;
    border-radius: 20px;
    object-fit: contain;

`;

const ProjectLabel = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid red;
    line-height: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    background-color: white;
    color: black;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const ProjectTitle = styled.h2`
    margin: 0 auto;
    background-color: white;
`;

const ProjectDescription = styled.p`
    margin: 0 auto;
    background-color: white;
`;

export default ImageCard
