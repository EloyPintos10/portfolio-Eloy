import React from "react";
import "../../css/contacto.css";
import { Container, Row } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Contacto = () => {
  return (
    <div id="contacto">
      <Container>
        <div className="container-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"           
            viewBox="0 0 248.256 255.304"
            id="svg-hexagono"
          >
            <path
              id="Trazado_12001"
              data-name="Trazado 12001"
              d="M145.458,0H48.486L0,87.344l48.486,87.344h96.972l48.486-87.344Z"
              transform="translate(0 167.961) rotate(-60)"
              fill="#e1df3c"
            />
          </svg>
          <div className="contain-text-contact">
            <h3 className="mb-4 text-center">Contacto</h3>
            <div className="container-email">
              <BsFillEnvelopeFill className="iconos-contact" />
              <p>eloy_pintos14@hotmail.com</p>
            </div>
            <div className="container-phone">
              <BsFillTelephoneFill className="iconos-contact" />
              <p>3816422575</p>
            </div>
            <div>
              <BsLinkedin className="iconos-contact" />
              <a
                href="www.linkedin.com/in/eloy-pintos-82017722a"
                target="_blank"
              >
                Perfil Linkedin
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacto;
