import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import formulario_login from '../components/formulario_login';
import abajo from '../components/abajo';
import texto_login from '../components/texto_login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import centro from '../components/centro';
class Login extends Component {
    render() {
        return (
            <div>
                <div className="color-fondo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <BrowserRouter>
                                    <Switch>
                                         <Route exact path="/" component={texto_login}/>
                                    </Switch>
                                </BrowserRouter>
                            </div>
                            <div className="col-6">
                                <BrowserRouter>
                                    <Switch>
                                         <Route exact path="/" component={formulario_login}/>
                                    </Switch>
                                </BrowserRouter>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
