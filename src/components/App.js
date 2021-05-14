import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';
import Menu from '../pages/Menu';
import centro from './centro';
import encabezado from './encabezado';
import formulario_login from './formulario_login';
import texto_login from './texto_login';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Menu" component={centro}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
