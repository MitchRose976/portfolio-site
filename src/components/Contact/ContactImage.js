import React from 'react'
import Container from '../Container'
import ContactPic from '../../images/Contact.png';
import ContactPic2 from '../../images/Contact-2.png';
import "../../App.css";

function ContactImage() {
    return (
        <Container
        height="11rem"
        width="11rem"
        margin="0 0 0 1rem"
        className="contact-pic-container"
        >
        <img src={ContactPic} className="contact-picture"/>
        </Container>
    )
}

export default ContactImage