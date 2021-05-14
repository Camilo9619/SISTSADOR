import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../css/centro.css';
import imagen1 from '../images/jeringa.svg';
class centro extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div class="parte-superior"> 
                            <div className="row">
                                <div className="col-3">
                                    <span>HEADER</span>
                                </div>
                                <div className="col-3">
                                    <span>HEADER</span>
                                </div>
                                <div className="col-3">
                                    <span>HEADER</span>
                                </div>
                                <div className="col-3">
                                    <span>HEADER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="fondo-prescripciones container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <span className="texto-blanco">Prescripciones</span>
                            </div>
                            <div className="col-6 texto-derecha">
                                <span >Hospitalario</span>
                            </div>
                        </div>
                        <div className="texto-gris">
                            <span>Prescripciones formuladas en la IPS</span>
                        </div>
                        <div className="row m-t-30 m-b-20">
                            <div className="col-sm-12 col-lg-4"> 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="texto-blanco">Cantidad</h3>
                                            <small className="texto-gris">Historico Formulado</small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="texto-blanco texto-numero">15207</h2>
                                        </div>
                                    </div>  
                                </div>      
                            </div>
                            <div className="col-sm-12 col-lg-8">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h3 className="texto-blanco">13042</h3>
                                                <h4 className="texto-blanco">1586</h4>
                                                <span className="texto-gris">Medicamentos</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h3 className="texto-blanco">1663</h3>
                                                <h4 className="texto-blanco">1172</h4>
                                                <span className="texto-gris">Procedimientos</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                               <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h3 className="texto-blanco">705</h3>
                                                <h4 className="texto-blanco">446</h4>
                                                <span className="texto-gris">Nutriciones</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h3 className="texto-blanco">639</h3>
                                                <h4 className="texto-blanco">64</h4>
                                                <span className="texto-gris">Complementarios</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h3 className="texto-blanco">0</h3>
                                                <h4 className="texto-blanco">0</h4>
                                                <span className="texto-gris">Dispositivos</span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fondo-direccionamientos container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <span className="texto-blanco">Direccionamientos</span>
                            </div>
                            <div className="col-6 texto-derecha">
                                <span className="texto-blanco" >Ambulatorio</span>
                            </div>
                        </div>
                        <div className="texto-gris">
                            <span className="texto-gris">Prescripciones Direccionadas a la IPS</span>
                        </div>
                        <div className="row m-t-30 m-b-20">
                            <div className="col-sm-12 col-lg-4"> 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="texto-blanco">Cantidad</h3>
                                            <small className="texto-gris">Historico Direccionado</small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="texto-blanco texto-numero">5231</span>
                                        </div>
                                    </div>  
                                </div>      
                            </div>
                            <div className="col-sm-12 col-lg-8">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <img className="imagen-1"src={imagen1}/>
                                            </div>
                                            <div>
                                                <h4 className="texto-blanco">4661</h4>
                                                <span className="texto-gris">Medicamentos</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <i className="mdi mdi-needle text-white display-5 op-5"><img className="imagen-1"src={imagen1}/></i>
                                            </div>
                                            <div>
                                                <h4 className="texto-blanco">546</h4>
                                                <span className="texto-gris">Procedimientos</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <i className="mdi mdi-needle text-white display-5 op-5"><img className="imagen-1"src={imagen1}/></i>
                                            </div>
                                            <div>
                                                <h4 className="texto-blanco">11</h4>
                                                <span className="texto-gris">Nutriciones</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <i className="mdi mdi-needle text-white display-5 op-5"><img className="imagen-1"src={imagen1}/></i>
                                            </div>
                                            <div>
                                                <h4 className="texto-blanco">13</h4>
                                                <span className="texto-gris">Complementarios</span>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="info d-flex align-items-center">
                                            <div className="m-r-10">
                                                <i className="mdi mdi-needle text-white display-5 op-5"><img className="imagen-1"src={imagen1}/></i>
                                            </div>
                                            <div>
                                                <h4 className="texto-blanco">0</h4>
                                                <span className="texto-gris">Dispositivos</span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="parte-inferior">
                        <span>All Rights Reserved by Xhygnus.com Developed by<a href="https://www.xhygnus.com/pweb/"> Xhygnus.</a></span>
                    </div>   
                </div>
            </div>
        );
    }
}
export default centro;