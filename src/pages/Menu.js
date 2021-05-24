import React, { Component } from 'react';
import centro from '../components/centro';
import abajo from '../components/abajo';
import '../css/menu.css';
import encabezado from '../components/encabezado';
import {BrowserRouter, Switch, Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
    render() {
        return (
            <div>
                <div className="fondo-parte">
                  <div>
                    <BrowserRouter>
                        <Switch>
                              <Route exact path="/" component={encabezado}/>
                        </Switch>
                    </BrowserRouter>
                  </div>
                  <div>
                    <BrowserRouter>
                        <Switch>
                              <Route exact path="/" component={centro}/>
                        </Switch>
                    </BrowserRouter>
                  </div>
                  <div>
                    <BrowserRouter>
                          <Switch>
                                <Route exact path="/" component={abajo}/>
                          </Switch>
                    </BrowserRouter>
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;