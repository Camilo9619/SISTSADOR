import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import formulario_login from '../components/formulario_login';
import Login from '../pages/Login';
import Menu from '../pages/Menu';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
