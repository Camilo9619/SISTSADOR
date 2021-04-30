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
                        <div className="texto-col1">
                            <span >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the
                                1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </span>
                        </div>
                    </div>
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
                                            <Link to="/centro"><button onclick className="boton-login" target="_blank" >Iniciar Sesión</button></Link>
                                            <Switch>
                                                <Route exact path="/centroÑO" component={centro}/>
                                            </Switch> 
                                        </Router>
                                        <div className="enlace">
                                            <a href="/">¿Olvidaste tu contraseña?</a>
                                        </div>
                                        <div className="barra">
                                            <span>_______________________________________________________</span>
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
