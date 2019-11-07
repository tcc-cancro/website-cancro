// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import 'react-awesome-slider/dist/styles.css';
import { compose } from 'redux';
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { NavLink } from 'react-router-dom';

class Escolha extends Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {
        const { isLoggingOut, logoutError } = this.props; return (
            <div>
                <div className="Titulo">
                    <span>Escolha</span>
                    <div className="Meio">
                    <button className="myButton"><NavLink to="/monitoramento">Monitoramentos</NavLink></button>
                    <button className="myButton"><NavLink to="/plantas">Plantas</NavLink></button>
                    <br></br>
                    <button className="myButton" onClick={this.handleLogout}>Sair</button>
                        {isLoggingOut && <p>Logging Out....</p>}
                        {logoutError && <p>Error logging out</p>}

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }
  
  export default compose(
    connect(mapStateToProps),
  )(Escolha);





