/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C8.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Medidas = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Medidas de Manejo</h2>
        <p>De acordo com a IN20 em pomares com incidência de até 1% (10 unidades em
1000), as plantas com sintomas do Cancro Europeu deverão ser erradicadas.
Em um primeiro momento o fruticultor pode ficar reticente em erradicar ou não
uma planta sintomática. No entanto, esta prática é altamente eficiente e barata
comparada a estratégia adotada por aqueles fruticultores que tentaram manejar
a doença via poda de ramos infectados e gastam entre R$ 2.500 e R$ 4.500
ano/hectare para tentar controlar o cancro. Geralmente a adoção da estratégia
de convivência é mais cara, quando comparada a da erradicação, e o fruticultor
corre o risco da incidência da doença aumentar na área provocando forte
redução na produção ao longo dos anos, diminuindo a vida útil do pomar, e
podendo inviabilizar a atividade comercial. Além disso, a retirada dos ramos
sintomáticos na maioria das vezes não elimina o fungo e quando o sintoma
reaparece na planta o fruticultor pode não estar atento. Para mais detalhes
consulte a galeria de imagens e vídeos.</p>

    <div>
            <AwesomeSlider>
            <div data-src="imagens/textos/medidas/A.JPG"/>
            <div data-src="imagens/textos/medidas/B.JPG"/>
            <div data-src="imagens/textos/medidas/C.JPG"/>
            <div data-src="imagens/textos/medidas/D.JPG"/>
            <div data-src="imagens/textos/medidas/E.JPG"/>
            <div data-src="imagens/textos/medidas/F.JPG"/>
            </AwesomeSlider>

        </div >
    </div>

);

export default Medidas;


