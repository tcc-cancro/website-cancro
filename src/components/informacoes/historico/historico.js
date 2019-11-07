/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagem from '../../../imagens/capas/C3.png';

const Historico = () => (
    <div className="divTitulo">
        <img src={imagem} className="imagem" />
        <h2 className='center-align'>Histórico</h2>
        <p>Até o início dos anos 2000 o fungo Neonectria ditissima era considerado uma Praga Quarentenária Ausente (A1) no país.
        A primeira introdução do fungo no Brasil ocorreu em 2002 em Vacaria (RS) através da importação de material vegetal infectado por N. ditissima oriundo da Europa.
     Neste viveiro foram incineradas aproximadamente 1 milhão de mudas de macieira e entre 2005-2006 o MAPA considerou que a praga estava ausente do país.
     No entanto, em 2002 a praga não foi completamente erradicada, pois o viveirista já havia comercializado as mudas doentes a outros produtores.
     Assim, em 2010 o cancro ressurgiu com muita agressividade após uma forte queda de granizo em pomares de Vacaria. Em 23/05/2014 o MAPA reconheceu a doença como praga quarentenária
     presente no Brasil (A2), sendo regulamentada por instrução normativa. Posteriormente a doença foi disseminada para os demais estados do sul do Brasil,
      através da aquisição de mudas nos viveiros de Vacaria.</p>
    </div>

);

export default Historico;


