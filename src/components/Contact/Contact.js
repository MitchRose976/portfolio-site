import React from 'react'
import Container from '../Container'
import Wrapper from '../UI/Wrapper'
import ContactCard from './ContactCard'
import ContactImage from './ContactImage'


function Contact() {
    return (
        <Container
        display="100%"
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        border="1px solid white"

        >
            <ContactCard/>
            <ContactImage/>
        </Container>
    )
}

export default Contact
