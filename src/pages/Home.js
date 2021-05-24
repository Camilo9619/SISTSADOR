import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Tabla_Prestadores from '../components/Tabla_Prestadores';
import '../css/home.css';
import BarraIzquierda from '../components/BarraIzquierda';
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <NavBar/>
                    </div>
                    <div className="row">
                        <div className="col-3">
                         <BarraIzquierda></BarraIzquierda>
                        </div>
                        <div className="col-9">
                            <div classname="tabla">
 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;