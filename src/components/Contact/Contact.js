import React from 'react'
import { GrContactInfo } from 'react-icons/gr'
import Container from '../Container'
import Wrapper from '../UI/Wrapper'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'


function Contact() {
    return (
        <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="contact"
        margin="3rem 0 3rem 0"
        >
            <ContactForm/>
            <ContactInfo/>
        </Container>
    )
}

export default Contact