import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Contacto = () => {
    return (
        <div id='contacto'>
            <Container>
            <h3>Contacto</h3>
<BsFillEnvelopeFill/>
<BsFillTelephoneFill/>
<BsLinkedin/>
            </Container>
        </div>
    );
};

export default Contacto;