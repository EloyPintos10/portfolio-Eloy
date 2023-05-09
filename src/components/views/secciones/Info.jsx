import React from "react";
import perfil from "../../../Assets/fotoPerfil.jpg";
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
              Soy un joven programador entusiasta con las ganas de aprender,
              ganar experiencias y nuevos conocimientos que permita mi
              crecimiento laboral y como persona.
            </p>
            <div className="mt-5">
            <a href="" className="perfil__cv">Ver CV</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
