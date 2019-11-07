/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C5.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Sintomatologia = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Sintomatologia</h2>
        <p>O sintoma característico da doença é a presença de cancro nos ramos com
forte engrossamento nas bordas inferiores e superiores. A medida que a lesão
evolui expõe o lenho ou estrangula os ramos, sendo possível observar
sintomas reflexos tais como ramos não brotados, amarelados, com folhas de

distintas colorações, murcha ou seca. No entanto, cancros jovens apresentam
outras características, como manchas de coloração marrom-avermelhado com
desprendimento da casca na área lesionada nos esporões, brindilas e gemas
foliares. Em pomares com cancro nos ramos pode-se observar a podridão em
frutos que se caracteriza por uma podridão firme, de cor marrom-escura com
frequentes rachaduras na região pistilar ou calicinal. Além disso, destacamos
ainda que muitos produtores possuem dúvidas para diferenciar os sintomas
ocasionados pelo cancro europeu e o de papel, bem como outros cancros,
deficiências, toxicidade por herbicidas ou ação de insetos. Para mais detalhes
consulte a galeria de imagens e vídeos.</p>
    <div>
            <AwesomeSlider>
            <div data-src="imagens/textos/sintomatologia/A.JPG"/>
            <div data-src="imagens/textos/sintomatologia/B.JPG"/>
            <div data-src="imagens/textos/sintomatologia/C.JPG"/>
            <div data-src="imagens/textos/sintomatologia/D.JPG"/>
            </AwesomeSlider>

        </div >
    </div>

);

export default Sintomatologia;


