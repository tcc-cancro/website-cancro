/* eslint-disable jsx-a11y/alt-text */
// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card} from 'react-materialize';
import imagem1 from '../../imagens/capas/C1.png';
import imagem2 from '../../imagens/capas/C2.jpg';
import imagem3 from '../../imagens/capas/C3.png';
import imagem4 from '../../imagens/capas/C4.jpg';
import imagem5 from '../../imagens/capas/C5.jpg';
import imagem6 from '../../imagens/capas/C6.jpg';
import imagem7 from '../../imagens/capas/C7.jpg';
import imagem8 from '../../imagens/capas/C8.jpg';
import { NavLink } from 'react-router-dom';
import './informacoes.css';


const Informacoes = () => (

  <Col m={8} s={12}>
    <div className="divTitulo">
    <span>Informações</span>
    </div>
    <Row>
      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem1} className="card-img-top img-fluid" />
          </div>

          <div class="info center-align">
            <b>Situação do Cancro Europeu em SC</b><br></br>
            <button className="myButton"><NavLink to="situacao-cancro">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem2} className="card-img-top img-fluid" />
          </div>

          <div className="info center-align">
            <b>Importância</b><br></br><br></br>
            <button className="myButton"><NavLink to="importancia">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem3} className="card-img-top img-fluid" />
          </div>

          <div class="info center-align">
            <b>Histórico</b><br></br><br></br>
            <button className="myButton"><NavLink to="historico">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem4} className="card-img-top img-fluid" />
          </div>

          <div class="info center-align">
            <b>Etiologia</b><br></br>
            <button className="myButton"><NavLink to="etiologia">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem5} className="card-img-top img-fluid" />
          </div>

          <div class="info center-align">
            <b>Sintomatologia</b><br></br>
            <button className="myButton"><NavLink to="sintomatologia">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem6} className="card-img-top img-fluid" />
          </div>
          
          <div class="info center-align">
            <b>Epidemiologia</b><br></br>
            <button className="myButton"><NavLink to="epidemiologia">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem7} className="card-img-top img-fluid" />
          </div>
          
          <div class="info center-align">
            <b>Instrução Normativa nº20</b><br></br>
            <button className="myButton"><NavLink to="instrucao">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>

      <Col s={5} l={4}>
        <Card>
          <div className="card-image">
            <img src={imagem8} className="card-img-top img-fluid" />
          </div>
          
          <div class="info center-align">
            <b>Medidas de Manejo</b><br></br>
            <button className="myButton"><NavLink to="medidas">Visualizar</NavLink></button>
          </div>
        </Card>
      </Col>
    </Row>
  </Col>
);

export default Informacoes;

