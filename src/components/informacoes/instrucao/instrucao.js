/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C7.jpg';

const Instrucao = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Instrucao Normativa nº20</h2>
        <p>De acordo com a definição de praga quarentenária A2, este é um organismo
que mesmo presente no país ou região deve permanecer sob controle
permanente, pois o mesmo ameaça à economia agrícola em seu território.
Assim, no Brasil existe um documento oficial que trata do Programa Nacional
de Prevenção e Controle do Cancro Europeu das Pomáceas chamada de
Instrução Normativa nº 20 (IN20). Esta instrução normativa é definida pelo
MAPA e nesta consta todos os procedimentos de manejo que devem ser
realizados por viveiristas, fruticultores e profissionais do setor para conter o
avanço da praga no país. Para mais detalhes consulte a IN20 em arquivos.</p>
    </div>

);

export default Instrucao;


