import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { Card } from "react-materialize";
import { compose } from 'redux';
import { myFirebase as firebase } from "../../firebase/firebase";
import { NavLink } from 'react-router-dom';

class Monitoramento extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('monitoramentos');
    this.unsubscribe = null;
    this.state = {
      monitoramentos: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const monitoramentos = [];
    querySnapshot.forEach((doc) => {
      const { data, email, planta, monitoramento } = doc.data();
      monitoramentos.push({
        key: doc.id,
        data,
        email,
        planta,
        monitoramento
      });
    });
    this.setState({
      monitoramentos
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { isLoggingOut, logoutError } = this.props; return (
      <div>
          <div className="divTitulo">
            <span>Monitoramento</span>
          </div>
        <div className="fundo">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Email</th>
                <th>Planta</th>
                <th>Monitoramento</th>
              </tr>
            </thead>
            <tbody>
              {this.state.monitoramentos.map(monitoramento =>
                <tr>
                  <td>{monitoramento.data}</td>
                  <td>{monitoramento.email}</td>
                  <td>{monitoramento.planta}</td>
                  <td>{monitoramento.monitoramento}</td>
                </tr>
              )}
            </tbody>

          </table>
          <button className="myButton"><NavLink to="/escolha">Voltar</NavLink></button>
          <button className="myButton" onClick={this.handleLogout}>Sair</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
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
)(Monitoramento);