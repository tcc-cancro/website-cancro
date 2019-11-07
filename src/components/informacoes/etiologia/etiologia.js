/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C4.jpg';

const Etiologia = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Etiologia</h2>
        <p>O agente causal do Cancro Europeu da macieira é o fungo ascomiceto
Neonectria ditissima, embora existam na literatura outras sinonímias como N.
galligena, Nectria ditissima e N. galligena. O fungo possui duas fases, a sexual
(Neonectria ditissima) e a assexual (Cylindrocarpon heteronema). As duas
fases do fungo têm a capacidade de infectar e formar novos cancros, desde
que se observem condições ambientais favoráveis e se observem ferimentos
nas plantas, tais como os ocasionados pela queda de folhas, colheita, poda,
rachaduras, batidas, ocorrência de granizo e outros.</p>
    </div>

);

export default Etiologia;


