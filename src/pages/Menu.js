import React, { Component } from 'react';
import centro from '../components/centro';
import '../css/menu.css';
import {BrowserRouter, Switch, Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import abajo from '../components/abajo';
import encabezado from '../components/encabezado';
class Menu extends Component {
    render() {
        return (
            <div>
                <div className="fondo-parte">
                    <BrowserRouter>
                        <Switch>
                                <Route exact path="/" component={centro}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Menu;