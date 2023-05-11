import React from "react";
import perfil from "../../../Assets/fotoPerfil.jpg";
import click from "../../../Assets/clic.png"
import pdf from "../../../Assets/CV.pdf"
import "../../css/info.css";
import { Container } from "react-bootstrap";
const Info = () => {
  return (
    <div id="info">
      <Container>
        <div className="section-perfil">
          <div>
            <img src={perfil} alt="Foto Perfil" id="fotoPerfil" />
          </div>
          <div className="perfil">
            <p className="perfil__name">ELOY PINTOS</p>
            <h3>Desarrollador Web - Full Stack developer</h3>
            <p className="perfil__details">
              Soy un joven programador entusiasta con ganas de aprender,
              ganar experiencias y nuevos conocimientos que permitan mi
              crecimiento profesional y laboral.
            </p>
            <div className="mt-5 contain-cv">
            <a href={pdf} className="perfil__cv" target="_blank">Ver CV</a>
            <img src={click} alt="click" className="click" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
