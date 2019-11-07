import React from "react";
import { Row, Col, Card } from 'react-materialize';
import ifsc from '../../imagens/ifsc.png';
import epagri from '../../imagens/epagri.png';
import fapesc from '../../imagens/fapesc.png';
import './logos.css';

const Logos = () => (
    <div>
        <div className="logoEsquerda"> 
            <h6>Desenvolvimento</h6>
            <Col s={8} m={8} offset="s2 m2">
                <img src={ifsc} className="responsive-img center-align"></img>
                <img src={epagri} className="responsive-img center-align"></img>
            </Col>
        </div>

        <div className="logoDireita">
            <h6>Apoio</h6>
            <Col s={8} m={8} offset="s2 m2">
                <img src={fapesc} className="responsive-img center-align"></img>
            </Col>
        </div>
    </div>
);

export default Logos;