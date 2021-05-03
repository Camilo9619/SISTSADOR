import React, { Component } from 'react';
import '../css/Formulario-Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Menu from '../pages/Menu';
import centro from './centro';



class formulario_login extends Component {
    render() {
        return (
            <div className="TODOLOGIN">
                <div className="row container-fluid">
               
                    <div className="col-6">
                        <div className="container-fluid formulario">
                            <div className="Principal">
                                <div className="Secundario">
                                    <div className="form-group">
                                        <input
                                            placeholder="Correo Electronico o Usuario"
                                            type="text"
                                            className="campo-formulario"
                                            name="username"
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            placeholder="Contraseña"
                                            type="password"
                                            className="campo-formulario"
                                            name="password"
                                            onChange={this.handleChange}    
                                        />
                                        <br/>
                                        <Router>
                                            <Link to="/centro"><button onclick className="boton-login" target="_set" >Iniciar Sesión</button></Link>
                                            <Switch>
                                                <Route exact path="/Menu" component={Menu}/>
                                            </Switch> 
                                        </Router>
                                        <div className="enlace">
                                            <a href="/">¿Olvidaste tu contraseña?</a>
                                        </div>
                                        <div className="barra">
                                            <span>______________________________________________________</span>
                                        </div>
                                        <div>
                                            <button className="boton-registrar" >Crear Cuenta</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        );
    }
}
export default formulario_login;
