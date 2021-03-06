import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from './Layout';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Tabla_Prestadores from './Tabla_Prestadores';
import Home from '../pages/Home';
import Prestadores from '../pages/Prestadores';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Tabla_Prestadores" component={Tabla_Prestadores}/>
          <Route exact path="/Home"component={Home}/>
          <Route exact path="/Prestadores"component={Prestadores}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
