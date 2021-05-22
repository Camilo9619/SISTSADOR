import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import BarraSuperior from '../components/BarraIzquierda';
import Tabla_Prestadores from '../components/Tabla_Prestadores';
import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BarraIzquierda from '../components/BarraIzquierda';
class Prestadores extends Component {
    render() {
        return (
            <div>
                <div className="pag">
                    <div className=".navbar-expand-md .navbar-collapse ">
                       <Navbar/>
                    </div>
                    <div class="sidebar">
                       <BarraIzquierda></BarraIzquierda>
                    </div>
                    <div className="tabla">
                       <Tabla_Prestadores/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Prestadores;