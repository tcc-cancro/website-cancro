/* eslint-disable jsx-a11y/alt-text */
// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import imagem1 from '../../imagens/capasGaleria/G1.jpg';
import imagem2 from '../../imagens/capasGaleria/G2.JPG';
import imagem3 from '../../imagens/capasGaleria/G3.JPG';
import imagem4 from '../../imagens/capasGaleria/G4.JPG';
import imagem5 from '../../imagens/capasGaleria/G5.JPG';
import imagem6 from '../../imagens/capasGaleria/G6.JPG';
import imagem7 from '../../imagens/capasGaleria/G7.JPG';
import imagem8 from '../../imagens/capasGaleria/G8.JPG';
import imagem9 from '../../imagens/capasGaleria/G9.JPG';
import imagem10 from '../../imagens/capasGaleria/G10.JPG';
import imagem11 from '../../imagens/capasGaleria/G11.JPG';
import imagem12 from '../../imagens/capasGaleria/G12.JPG';
import imagem13 from '../../imagens/capasGaleria/G13.JPG';
import imagem14 from '../../imagens/capasGaleria/G14.jpg';
import imagem15 from '../../imagens/capasGaleria/G15.jpg';
import imagem16 from '../../imagens/capasGaleria/G16.JPG';
import imagem17 from '../../imagens/capasGaleria/G17.JPG';
import imagem18 from '../../imagens/capasGaleria/G18.JPG';
import imagem19 from '../../imagens/capasGaleria/G19.JPG';
import imagem20 from '../../imagens/capasGaleria/G20.jpg';
import imagem21 from '../../imagens/capasGaleria/G21.JPG';
import { NavLink } from 'react-router-dom';
import './imagens.css';

const Imagens = () => (

    <Col m={8} s={12}>
        <div className="divTitulo">
        <span>Galeria de Imagens</span>
        </div>
        <Row>
            <h3>Sintomas</h3>
            <Col s={5} l={4}>
               <Card>
                <img src={imagem1} className="card-img-top img-fluid"/>    

                <div class="info center-align">
                  
                <b>Sintomas do Cancro de Papel</b><br></br><br></br>
                <button className="myButton"><NavLink to="cancro-papel">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem2} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro em Frutos</b><br></br><br></br>
                <button className="myButton"><NavLink to="cancro-frutos">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem3} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Situação do Cancro na Brotação e Floração</b><br></br>
                <button className="myButton"><NavLink to="cancro-brotatao-floracao">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem4} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro na Colheita</b><br></br><br></br>
                <button className="myButton"><NavLink to="cancro-colheita">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem5} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro na Poda</b><br></br><br></br>
                <button className="myButton"><NavLink to="cancro-poda">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem6} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro na Queda de Folhas</b><br></br>
                <button className="myButton"><NavLink to="cancro-queda-folha">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem7} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro no Burrknots</b><br></br>
                <button className="myButton"><NavLink to="cancro-burrknots">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem8} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro no Líder Central</b><br></br>
                <button className="myButton"><NavLink to="cancro-lider-central">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem9} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro no ponto de colheita</b><br></br>
                <button className="myButton"><NavLink to="cancro-ponto-colheita">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem10} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Sintomas do Cancro no Raleio</b><br></br>
                <button className="myButton"><NavLink to="cancro-raleio">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>
            </Row>

            <Row>
            <h3>Manejo</h3>
            <Col s={5} l={4}>
               <Card>
                <img src={imagem11} className="card-img-top img-fluid"/>    

                <div class="info center-align">
                  
                <b>Manejo de Pré-Colheita</b><br></br>
                <button className="myButton"><NavLink to="manejo-pre-colheita">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem12} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Manejo de Pós-Colheita</b><br></br>
                <button className="myButton"><NavLink to="manejo-pos-colheita">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem13} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Manejo de queda de folhas</b><br></br>
                <button className="myButton"><NavLink to="manejo-queda">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem14} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Manejo de poda</b><br></br>
                <button className="myButton"><NavLink to="manejo-poda">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>
            </Row>

            <Row>
            <h3>Epidemiologia e Monitoramento</h3>
            <Col s={5} l={4}>
               <Card>
                <img src={imagem15} className="card-img-top img-fluid"/>    

                <div class="info center-align">
                  
                <b>Esporodóquios e Cońıdios</b><br></br>
                <button className="myButton"><NavLink to="esporodoquios">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem16} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Peritécios, Ascas e Asćosporos</b><br></br>
                <button className="myButton"><NavLink to="peritecios">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem17} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Arqueamento de ramos</b><br></br>
                <button className="myButton"><NavLink to="arqueamento">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem18} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Ferimentos e aberturas naturais</b><br></br><br></br>
                <button className="myButton"><NavLink to="ferimentos-e-aberturas">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem19} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Plantas manejadas para controle do Cancro Europeu</b><br></br>
                <button className="myButton"><NavLink to="plantas-manejadas">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem20} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Ações para conscientizaç̃ao dos fruticultores</b><br></br>
                <button className="myButton"><NavLink to="fruticultores">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem21} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Uso de quebra ventos</b><br></br>
                <button className="myButton"><NavLink to="quebra-ventos">Visualizar</NavLink></button>
                </div>
               </Card>
             </Col>
            </Row>
    </Col>
);



export default Imagens;