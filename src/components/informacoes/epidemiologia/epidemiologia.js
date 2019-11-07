/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C6.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Epidemiologia = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Epidemiologia</h2>
        <p>Na fase sexuada do fungo (Neonectria ditissima) ocorre a formação de
peritécios, de cor vermelha que servem como estrutura de sobrevivência, bem
como inicia o ciclo primário da doença através da ejeção dos ascósporos
destes corpos de frutificação. Na fase assexuada do fungo (Cylindrocarpon
heteronema), os conídios originam-se a partir de estruturas globosas
denominadas esporodóquios, de coloração branca-amarelada. Com a chuva e
o vento os conídios dos esporodóquios e ascósporos dos peritécios podem ser
liberados e disseminados do cancro, respectivamente entre 1 e 4 metros e até
10 quilômetros da planta de origem. A germinação de ascósporos e conídios
ocorre entre 6 e 30ºC. Na temperatura de 20ºC bastam apenas 2-3h de chuva
ou molhamento para que ocorra a infecção. Os dois esporos necessitam de
ferimentos ou aberturas naturais para que possam penetrar nos tecidos da
macieira. Após a infecção o fungo pode ficar latente em ramos assintomáticos
por até três anos. Para mais detalhes consulte a galeria de imagens.</p>

        <div>
            <AwesomeSlider>
            <div data-src="imagens/textos/epidemiologia/A.JPG"/>
            <div data-src="imagens/textos/epidemiologia/B.JPG"/>
            <div data-src="imagens/textos/epidemiologia/C.JPG"/>
            <div data-src="imagens/textos/epidemiologia/D.JPG"/>
            <div data-src="imagens/textos/epidemiologia/E.JPG"/>
            <div data-src="imagens/textos/epidemiologia/F.jpg"/>
            </AwesomeSlider>

        </div >

    </div>

    

);

export default Epidemiologia;


