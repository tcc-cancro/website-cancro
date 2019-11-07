// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import Logos from '../logos/logos';
import 'react-awesome-slider/dist/styles.css';
import './inicio.css';

const Inicio = () => (
  <div>
  <div className="Titulo">
    <span>Página Inicial</span>
    <div className="Meio">
          <p>Bem vindo ao site sobre cancro europeu! <br></br>Você pode navegar pelas diferentes seções através do cabeçalho logo acima.</p>
    </div>
  </div>
  </div>
);

export default Inicio;