import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { compose } from 'redux';
import { myFirebase as firebase } from "../../firebase/firebase";
import { NavLink } from 'react-router-dom';

class Plantas extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('plantas');
    this.unsubscribe = null;
    this.state = {
      plantas: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const plantas = [];
    querySnapshot.forEach((doc) => {
      const { nome, descricao, latitude, longitude, email } = doc.data();
      plantas.push({
        key: doc.id,
        nome,
        descricao,
        latitude,
        longitude,
        email
      });
    });
    this.setState({
      plantas
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
            <span>Plantas</span>
          </div>
        <div className="fundo">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.plantas.map(planta =>
                <tr>
                  <td>{planta.nome}</td>
                  <td>{planta.descricao}</td>
                  <td>{planta.latitude}</td>
                  <td>{planta.longitude}</td>
                  <td>{planta.email}</td>
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
)(Plantas);