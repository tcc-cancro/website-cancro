import React from "react";

import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";

import Inicio from "./components/inicio/inicio";
import { Container } from 'react-materialize';
import Informacoes from "./components/informacoes/informacoes";
import SituacaoCancro from "./components/informacoes/situacao-cancro/situacao-cancro";
import Importancia from "./components/informacoes/importancia/importancia";
import Historico from "./components/informacoes/historico/historico";
import Etiologia from "./components/informacoes/etiologia/etiologia";
import Sintomatologia from "./components/informacoes/sintomatologia/sintomatologia";
import Epidemiologia from "./components/informacoes/epidemiologia/epidemiologia";
import Imagens from "./components/imagens/imagens";
import Monitoramento from "./components/monitoramento/monitoramento";
import CancroPapel from "./components/imagens/galerias/cancro-papel";
import Instrucao from "./components/informacoes/instrucao/instrucao";
import Medidas from "./components/informacoes/medidas/medidas";
import Videos from "./components/videos/videos";
import Plantas from "./components/monitoramento/plantas";
import CancroFloracaoBrotacao from "./components/imagens/galerias/cancro-floracao-brotacao";
import CancroQueda from "./components/imagens/galerias/cancro-na-queda";
import CancroPoda from "./components/imagens/galerias/cancro-na-poda";
import CancroColheita from "./components/imagens/galerias/cancro-na-colheita";
import CancroFrutos from "./components/imagens/galerias/cancro-em-frutos";
import CancroBurkknots from "./components/imagens/galerias/cancro-burrknots";
import CancroPontoColheita from "./components/imagens/galerias/cancro-ponto-colheita";
import CancroRaleio from "./components/imagens/galerias/cancro-raleio";
import CancroLider from "./components/imagens/galerias/cancro-lider-central";
import ManejoPreColheita from "./components/imagens/galerias/manejo-pre-colheita";
import ManejoPosColheita from "./components/imagens/galerias/manejo-pos-colheita";
import ManejoQueda from "./components/imagens/galerias/manejo-queda";
import ManejoPoda from "./components/imagens/galerias/manejo-poda";
import Esporodoquios from "./components/imagens/galerias/esporodoquios";
import Peritecios from "./components/imagens/galerias/peritecios";
import Ferimentos from "./components/imagens/galerias/ferimentos-e-aberturas";
import PlantasManejadas from "./components/imagens/galerias/plantas-manejadas";
import Fruticultores from "./components/imagens/galerias/fruticultores";
import QuebraVentos from "./components/imagens/galerias/quebra-ventos";
import Arqueamento from "./components/imagens/galerias/arqueamento";
import Escolha from "./components/monitoramento/escolha";
import Login from "./components/login/login";

function Main(props) {
    const { isAuthenticated, isVerifying } = props;
    return (
        <main>
            <Container>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/escolha"
                        component={Escolha}
                        isAuthenticated={isAuthenticated}
                        isVerifying={isVerifying}
                    />
                    <Route exact path='/' component={Inicio} />
                    <Route path='/informacoes' component={Informacoes} />
                    <Route path='/monitoramento' component={Monitoramento} />
                    <Route path='/plantas' component={Plantas} />

                    <Route path='/imagens' component={Imagens} />
                    <Route path='/situacao-cancro' component={SituacaoCancro} />
                    <Route path='/cancro-papel' component={CancroPapel} />
                    <Route path='/cancro-frutos' component={CancroFrutos} />
                    <Route path='/cancro-brotatao-floracao' component={CancroFloracaoBrotacao} />
                    <Route path='/cancro-colheita' component={CancroColheita} />
                    <Route path='/cancro-poda' component={CancroPoda} />
                    <Route path='/cancro-queda-folha' component={CancroQueda} />
                    <Route path='/cancro-burrknots' component={CancroBurkknots} />
                    <Route path='/cancro-lider-central' component={CancroLider} />
                    <Route path='/cancro-ponto-colheita' component={CancroPontoColheita} />
                    <Route path='/cancro-raleio' component={CancroRaleio} />
                    <Route path='/manejo-pre-colheita' component={ManejoPreColheita} />
                    <Route path='/manejo-pos-colheita' component={ManejoPosColheita} />
                    <Route path='/manejo-queda' component={ManejoQueda} />
                    <Route path='/esporodoquios' component={Esporodoquios} />
                    <Route path='/peritecios' component={Peritecios} />
                    <Route path='/arqueamento' component={Arqueamento} />
                    <Route path='/ferimentos-e-aberturas' component={Ferimentos} />
                    <Route path='/plantas-manejadas' component={PlantasManejadas} />
                    <Route path='/fruticultores' component={Fruticultores} />
                    <Route path='/manejo-poda' component={ManejoPoda} />
                    <Route path='/quebra-ventos' component={QuebraVentos} />
                    
                    <Route path='/importancia' component={Importancia} />
                    <Route path='/historico' component={Historico} />
                    <Route path='/etiologia' component={Etiologia} />
                    <Route path='/sintomatologia' component={Sintomatologia} />
                    <Route path='/epidemiologia' component={Epidemiologia} />
                    <Route path='/instrucao' component={Instrucao} />
                    <Route path='/medidas' component={Medidas} />
                    <Route path='/videos' component={Videos} />
                    <Route path='/login' component={Login} />
                </Switch>
            </Container>
        </main>
    );
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(Main);