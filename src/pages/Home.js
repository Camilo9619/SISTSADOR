import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Tabla_Prestadores from '../components/Tabla_Prestadores';
import '../css/home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div classname="">
                       <Navbar/>
                    </div>
                    <div className="row">
                        <div className="col-3">
                         <Sidebar></Sidebar>
                        </div>
                        <div className="col-9">
                            <div classname="tabla">
                                <div className="titulo-tabla">
                                    <span>Lista de Prestadores</span>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;