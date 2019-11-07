/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C2.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './importancia.css';

const Importancia = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Importância</h2>
        <p>O Cancro Europeu da macieira causa grande preocupação devido à
possibilidade de inviabilizar a atividade pomícola. As principais recomendações
de controle do Cancro Europeu são baseadas em aquisição de mudas livres da
doença, erradicação dos cancros e plantas, e proteção com fungicidas dos
ferimentos de queda de folhas, colheita e poda. No entanto, tais medidas não
impedem que a doença provoque fortes reduções de produtividade e aumente
o custo de produção em até 20%. Além disso, outros fatores geram apreensão
para o setor produtivo tais como: a doença é altamente agressiva podendo
matar um ramo ou mesmo a planta em poucos meses; os melhores fungicidas
possuem eficiência inferior a 80% de controle; o manejo e monitoramento
demandam tempo e trabalho; a disseminação ocorre em progressão
geométrica; causa perdas de frutos na pré e pós-colheita, a doença nas
condições ambientais do Brasil é muito mais agressiva, quando comparada a
outras regiões produtoras de macieira no mundo. Para mais detalhes consulte
a galeria de imagens.</p>


        <AwesomeSlider>
            <div data-src="imagens/textos/importancia/A.jpg"/>
            <div data-src="imagens/textos/importancia/B.jpg"/>
            <div data-src="imagens/textos/importancia/C.jpg"/>
            <div data-src="imagens/textos/importancia/D.jpg"/>
        </AwesomeSlider>

    </div>

);

export default Importancia;


