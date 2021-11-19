import React from 'react'
import Container from '../Container';
import styled from "styled-components";

function Footer() {
    return (
        <Container
        width="100%"
        position="relative"
        color="white "

        >
        <FooterLogoDiv>
            <FooterLogo>Footer</FooterLogo>
        </FooterLogoDiv>
        <FooterLinks>
        <FooterList>
            <FooterListItem>
                <FooterLink>Home</FooterLink>
            </FooterListItem>
            <FooterListItem>
            <FooterLink>Projects</FooterLink>
            </FooterListItem>
            <FooterListItem>
            <FooterLink>Contact</FooterLink>
            </FooterListItem>
        </FooterList>
        </FooterLinks>
        </Container>
    )
}

const FooterLogoDiv = styled.div`
    width: 30%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    color: white;
    position: absolute;
    left: 0;
`;

const FooterLogo = styled.h1`
    font-size: 4rem;
`;

const FooterLinks = styled.div`
    border: 1px solid blue;
    width: 70%;
    height: 10rem;
    display: flex;
    position: absolute;
    right: 0;
    justify-content: center;
    align-items: center;

`;

const FooterList = styled.ul`
    color: white;
    list-style: none;
`

const FooterListItem = styled.li`
    color: white;
    text-decoration: none;
    display:inline;
    margin-right: 8rem;
`;

const FooterLink = styled.a`
    color: white;
`;  

export default Footer


