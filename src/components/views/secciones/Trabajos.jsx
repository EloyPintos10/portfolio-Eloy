import React from 'react';
import "../../css/trabajos.css"
import { Container, Row } from 'react-bootstrap';
import villavicencio from "../../../Assets/promo-naturaleza.jpeg"
import triviaFans from "../../../Assets/trivia-fan-mobile.jpeg"
import cencosud from "../../../Assets/cencosud.jpeg"
import tripleB from "../../../Assets/fotoPerfil.jpg"
const Trabajos = () => {
    return (
        <div id='trabajos'>
            <Container>
                <h3>Trabajos Realizados</h3>
                <div className='content-trabajos'>

            <Row sm={1} lg={4}>
                <a href="https://majestic-bublanina-f82413.netlify.app" target="_blank">
                    <img src={villavicencio} alt="Promo Naturaleza" />
                    <p>Promo Naturaleza - Villavicencio</p>
                </a>
                <a href="https://darling-biscuit-2c98ce.netlify.app" target="_blank">
                    <img src={tripleB} alt="Promo triple B" />
                    <p>Promo triple B - VEA</p>
                </a>
                <a href="https://effulgent-biscochitos-2aa28d.netlify.app" target="_blank">
                    <img src={cencosud} alt="Promo Cencosud" />
                    <p>Promo cencosud</p>
                </a>
                <a href="https://majestic-bublanina-f82413.netlify.app" target="_blank">
                    <img src={triviaFans} alt="Trivia fan Mobile" />
                    <p>Trivia Fan - YPF</p>
                </a>
                
               
            </Row>
                </div>
            </Container>
        </div>
    );
};

export default Trabajos;