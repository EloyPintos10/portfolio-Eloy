import React from 'react';
import Info from './secciones/Info';
import Practicas from './secciones/Practicas';
import Trabajos from './secciones/Trabajos';
import Contacto from './secciones/Contacto';

const Main = () => {
    return (
        <div>
            <Info></Info>
            <Practicas></Practicas>
            <Trabajos></Trabajos>
            <Contacto></Contacto>
        </div>
    );
};

export default Main;
