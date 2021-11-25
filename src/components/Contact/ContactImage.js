import React from 'react'
import Container from '../Container'
import ContactPic from '../../images/Contact.png';
import "../../App.css";

function ContactImage() {
    return (
        <Container
        height="40rem"
        width="40rem"
        margin="0 0 0 1rem"
        border="1px solid red"
        >
        <img src={ContactPic} className="contact-picture"/>
        </Container>
    )
}

export default ContactImage
