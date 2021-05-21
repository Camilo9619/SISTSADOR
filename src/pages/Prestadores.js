import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import SIDEBAR from '../components/Sidebar';
import Tabla_Prestadores from '../components/Tabla_Prestadores';
import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
class Prestadores extends Component {
    render() {
        return (
            <div>
                <div className="pag">
                    <div className=".navbar-expand-md .navbar-collapse ">
                       <Navbar/>
                    </div>
                    <div class="sidebar">
                        <Sidebar/>
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