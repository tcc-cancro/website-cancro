/* eslint-disable jsx-a11y/alt-text */
// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import imagem1 from '../../imagens/videosThumbnail/1.jpg';
import imagem2 from '../../imagens/videosThumbnail/2.jpg';
import imagem3 from '../../imagens/videosThumbnail/3.jpg';
import imagem4 from '../../imagens/videosThumbnail/4.jpg';
import imagem5 from '../../imagens/videosThumbnail/5.jpg';
import imagem6 from '../../imagens/videosThumbnail/6.jpg';
import imagem7 from '../../imagens/videosThumbnail/7.jpg';
import imagem8 from '../../imagens/videosThumbnail/8.jpg';
import imagem9 from '../../imagens/videosThumbnail/9.jpg';
import './videos.css';


const Videos = () => (

    <Col m={8} s={12}>
        <div className="divTitulo">
        <span>Galeria de Vídeos</span>
        </div>
            <Row>
            <Col s={5} l={4}>
               <Card>
                <img src={imagem1} className="card-img-top img-fluid"/>    
                
                <div class="info center-align">
                  
                <b>Limpeza de Frutos do Pomar</b><br></br><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/L-xwFep2RjQ">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem2} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Como diferenciar sintomas de cancro europeu e o de papel</b><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/IOdGqUsxHm4">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem3} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Procurando cancros no manejo de poda</b><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/nCxtjMNhKqg">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem4} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Manejo de queda de folhas</b><br></br><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/zbYzprHfMyQ">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem5} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                  
                <b>Manejo de fungicidas no período de queda de folhas</b><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/XJLttBRWCFs">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem6} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                <b>Procurando cancros no manejo de queda de folhas</b><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/pldU7fLMgRo">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem7} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                <b>Porque erradicar ao invés de manejar 1</b><br></br><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/HnWyuxZ_xxY">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem8} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                <b>Porque erradicar ao invés de manejar 2</b><br></br><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/lAb92_MdwZQ">Visualizar</a></button>
                </div>
               </Card>
             </Col>

             <Col s={5} l={4}>
               <Card><img src={imagem9} className="card-img-top img-fluid"/>    
                <div class="info center-align">
                <b>Como identificar sintomas de cancro europeu na brotação e floração</b><br></br>
                <button className="myButton"><a target="_blank" href="https://youtu.be/cEM1erlwfFA">Visualizar</a></button>
                </div>
               </Card>
             </Col>
            </Row>
    </Col>
);

export default Videos;
