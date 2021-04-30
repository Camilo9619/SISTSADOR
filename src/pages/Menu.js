import React, { Component } from 'react';
import centro from '../components/centro';
import '../css/menu.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import encabezado from '../components/encabezado';
class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={encabezado}/>
                        </Switch>
                    </BrowserRouter>
                </div>
                <div className="fondo-parte">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={centro}/>
                        </Switch>
                    </BrowserRouter>
                </div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={encabezado}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Menu;