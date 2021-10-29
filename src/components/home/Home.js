import React from 'react'
import styled from "styled-components";
import logo from './headshot_bw.png'

const Home = () => {
    return (
        <Landing>
            <Text style={{marginTop: '3rem'}}>Hey there!</Text>
            <Text style={{color: '#FFBCB5', fontSize: '3.5rem'}}>I'm Mitch,</Text>
            <Text>Your next Front-End Developer.</Text>
            <Watermark>CSS / Javascript / React</Watermark>
            <Button>Lets Chat</Button>
            <Headshot src={logo} />
        </Landing>
    )
}

const Landing = styled.div`
    border: 1px solid white;
    height: 3000px;
    margin-top: 5rem;
`;

const Text = styled.h2`
    font-size: 2rem;
    color: white;
    padding-left: 4rem;
`;

const Watermark = styled.p`
    font-size: 1.5rem;
    ${'' /* color: rgba(140, 255, 152, 1); */}
    color: rgba(162, 167, 165, 0.6);
    padding-left: 4rem;
`;

const Button = styled.button`
    font-size: 1.3rem;
    color: #FFBCB5;
    margin: 3rem 0 0 4rem;
    padding: 5px;
    width: 9rem;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgba(255, 188, 181, 0.7);
    border: 3px solid #FFBCB5; 
    transition: ease-out 0.3s;

    &:hover { 
        box-shadow: inset 9rem 0 0 0 rgba(255, 188, 181, 0.7);
        color: white;
    }
`;

const Headshot = styled.img`
    display: inline-block;
    width: 8rem;
`;

export default Home;
