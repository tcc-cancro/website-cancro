import React from 'react';
import imagem1 from '../../../imagens/capas/C1.png';
import './situacao-cancro.css';

const SituacaoCancro = () => (
    <div className="divTitulo">
     <img src={imagem1} className="imagem"/> 
        <h2 className='center-align'>Situação do Cancro Europeu da Macieira em Santa Catarina</h2>
            <p>Segundo dados da Cidasc, estima-se que aproximadamente 10% das unidades
produtivas de macieira de Santa Catarina já tiveram registro de ocorrência do
Cancro Europeu nos pomares. No entanto, 90% das unidades produtivas com
casos positivos do Cancro Europeu, possuem incidência inferior a 1% da
doença. Estes baixos valores de incidência do Cancro Europeu em Santa
Catarina possibilitam ainda se pensar em erradicação da doença no estado, já
que de acordo com o artigo n°9 da instrução normativa n°20 que trata do
Programa Nacional de Prevenção e Controle do Cancro Europeu das
Pomáceas: “Em Unidades de Produção com incidência de até 1% (um por
cento), as plantas com sintomas deverão ser arrancadas e incineradas”. Assim,
em Santa Catarina o principal objetivo do setor da maleicultura é continuar
tentando a erradicação do Cancro Europeu até o momento em que se tenha
êxito, ou que não seja mais possível adotar tal prática.</p>
        </div>

 
);

export default SituacaoCancro;