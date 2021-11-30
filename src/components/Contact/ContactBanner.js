import React from 'react'
import styled from "styled-components";
import '../../App.css'

function ContactBanner() {
    return (
        <Banner>
            <BannerLabel>Lets Chat</BannerLabel>
        </Banner>
    )
}

const Banner = styled.div`
    width: 100%;
    height: 7rem;
    color: white;
    background-color: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`

const BannerLabel = styled.h1`
    font-size: 3rem;
    text-align: center;
    background-color: var(--purple);
`

export default ContactBanner
