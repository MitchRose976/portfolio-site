import React from 'react'
import Container from '../Container';
import styled from "styled-components";

function Footer() {
    return (
        <Container
        width="100%"
        height="10rem"
        color="white "

        >
        <FooterLogoDiv>
            <FooterLogo>Footer</FooterLogo>
        </FooterLogoDiv>
        <FooterLinks>Footer</FooterLinks>
        </Container>
    )
}

const FooterLogoDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    color: white;
`;

const FooterLogo = styled.h1`
    font-size: 4rem;
`;

const FooterLinks = styled.div`
    
    border: 1px solid blue;

`;


export default Footer


