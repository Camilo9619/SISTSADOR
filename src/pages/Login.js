import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import formulario_login from '../components/formulario_login';
import texto_login from '../components/texto_login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Menu from './Menu';
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
    render() {
        return (
            <div>
                <div className="color-fondo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <texto_login/>
                            </div>
                            <div className="col-6">
                                <formulario_login/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
