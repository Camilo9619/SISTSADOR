import React, { Component } from 'react';
import '../css/Formulario-Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



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
                                        <Link className="boton-login" target="_blank" to="/Home">Iniciar Sesión</Link>
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