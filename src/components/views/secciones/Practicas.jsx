import React from 'react';
import "../../css/practicas.css"
import bancoRolling from "../../../Assets/rolling-bank.jpeg"
import imgResto from "../../../Assets/restaurant.jpeg"
import panaderia from "../../../Assets/panaderia-cocu.jpeg"
import peliRolling from "../../../Assets/rolling+.png"
import cerveceria from "../../../Assets/VIKINGO.png"
import { Container, Row } from 'react-bootstrap';
const Practicas = () => {
    return (
        <div id='practicas'>
            <Container>
            <h3>Prácticas Profesionales</h3>
            <div className='content-practicas'>

            <Row sm={1} lg={4}>
                <a href="https://dainty-salamander-578a90.netlify.app" target="_blank">
                    <img src={imgResto} alt="Restaurant" />
                </a>
                <a href="https://rollingbankep.netlify.app" target="_blank">
                    <img src={bancoRolling} alt="Rolling Bank" />
                </a>
                <a href="https://cocupanaderiac7i.netlify.app" target="_blank">
                    <img src={panaderia} alt="Panaderia cocu" />
                </a>
                <a href="https://rollingplusg1.netlify.app" target="_blank">
                    <img src={peliRolling} alt="Rolling+" />
                </a>
                <a href="https://vikingo-cerveceria.netlify.app" target="_blank" >
                    <img src={cerveceria} alt="Cerveceria Vikingo" />
                </a>
               
               
            </Row>
            </div>
            </Container>
        </div>
    );
};

export default Practicas;