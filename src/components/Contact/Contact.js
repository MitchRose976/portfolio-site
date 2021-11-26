import React from 'react'
import Container from '../Container'
import Wrapper from '../UI/Wrapper'
import ContactCard from './ContactCard'
import ContactImage from './ContactImage'


function Contact() {
    return (
        <Container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        className="contact"

        >
            <ContactCard/>
            <ContactImage/>
        </Container>
    )
}

export default Contact
