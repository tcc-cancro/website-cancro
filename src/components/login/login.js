import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions";
import { Col, Row, TextInput, Card, Button } from 'react-materialize';

class Login extends Component {
    state = { email: "", password: "" };

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
    };

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
    };

    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginUser(email, password));
    };

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/escolha" />
        } else {
            return (

                    <Col m={8} s={12}>
                        <div className="divTitulo">
                            <span>Login</span>
                        </div>

                        <div className="divTitulo">
                        <Card>
                            <TextInput label="Email" onChange={this.handleEmailChange} s={12} placeholder="pesquisador@gmail.com" type="email" />
                            <TextInput label="Senha" onChange={this.handlePasswordChange} s={12} password  />
                            <button className="myButton center-align" onClick={this.handleSubmit}>Entrar</button>
                        </Card>
                        </div>
                    </Col>


            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(Login);