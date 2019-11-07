import React from "react";
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import ifsc from '../../imagens/ifsc.png';
import epagri from '../../imagens/epagri.png';
import fapesc from '../../imagens/fapesc.png';
import '../logos/logos.css';

const Header = () => (
        <Navbar className="light-green darken-4">
          <div class="nav-wraper">
           <ul class="left hide-on-med-and-down">
           <li><a href="https://www.ifsc.edu.br/"><img src={ifsc} className="ifsc responsive-img"></img></a></li>
           <li><a href="http://www.epagri.sc.gov.br/"><img src={epagri} className="epagri responsive-img"></img></a></li>
           <li><a href="http://www.fapesc.sc.gov.br/"><img src={fapesc} className="fapesc responsive-img"></img></a></li>
           </ul>
          </div>

          <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="informacoes">Informações</NavLink></li>
                <li><NavLink to="imagens">Galeria de Imagens</NavLink></li>
                <li><NavLink to="videos">Vídeos</NavLink></li>
                <li><NavLink to="login">Monitoramento</NavLink></li>
            </ul>
          </div>
        </Navbar>
);

export default Header;