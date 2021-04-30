import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import formulario_login from '../components/formulario_login';




function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={formulario_login}/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
