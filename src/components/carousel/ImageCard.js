import React from 'react'
import styled from "styled-components";
import Container from '../Container'
import Pic from './pic1.jpg';


const ImageCard = () => {
    return (
        <Container height="70%" width="50%" position="relative" borderRadius="10px">
            <ProjectImage src={Pic}/>
            <ProjectLabel>
                <ProjectTitle>Project 1</ProjectTitle>
                <ProjectDescription>This is a project about my favourite tabletop strategy game</ProjectDescription>
            </ProjectLabel>
        </Container>
    )
}

const ProjectImage = styled.img`
    width: 100%;
    height: 70%;
    object-fit: contain;
    justify-content: center;
`;

const ProjectLabel = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid red;
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
`;

const ProjectTitle = styled.h2`
    margin: 0 auto;
    background-color: white;
`;

const ProjectDescription = styled.span`
    display: inline;
    background-color: white;
`;

export default ImageCard
