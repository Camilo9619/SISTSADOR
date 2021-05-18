import React, { Component } from 'react';
import centro from '../components/centro';
import '../css/menu.css';
import {BrowserRouter, Switch, Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
    render() {
        return (
            <div>
                <div className="fondo-parte">
                  <div>
                    <encabezado/>
                  </div>
                  <div>
                    <centro/>
                  </div>
                  <div>
                    <abajo/>
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;