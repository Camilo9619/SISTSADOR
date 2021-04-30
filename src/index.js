import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import abajo from './components/abajo';
import centro from './components/centro';
import encabezado from './components/encabezado';
import formulario_login from './components/formulario_login';
import texto_login from './components/texto_login';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Routes from './routes/Routes';

class index extends Component {

  render() {
    return (
      <>
        <div className="app s-pxy-2">
        <h1 className="s-center">Bienvenidos a Inicio</h1>
        <Router>
          <ul className="nav-container s-border s-main-center s-pl-0">
            
            <li className="nav-container--item s-mr-2">
            <Link to="/formulario_login">Ingresar</Link></li>
            
            <li className="nav-container--item">
            <Link to="/centro">Principal</Link></li>
          </ul>
          <Switch>
            <Route exact path="/encabezado" component={encabezado}/>
            <Route exact path="/texto_login" component={texto_login}/>
            <Route exact path="/formulario_login" component={formulario_login}/>
            <Route exact path="/footer" component={abajo}/>
            <Route exact path="/centro" component={centro}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Menu" component={Menu}/>
          </Switch>
        </Router>
        </div>
      </>
    );
  }
}

render(<Routes />, document.getElementById('root'));
