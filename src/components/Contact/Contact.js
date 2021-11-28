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
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        className="contact"
        width="90%"
        >
            <ContactForm/>
            <ContactInfo/>
        </Container>
    )
}

export default Contact