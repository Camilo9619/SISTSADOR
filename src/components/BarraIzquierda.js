import React from 'react';
import '../css/BarraIzquierda.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { BarChart } from 'react-bootstrap-icons';

const BarraIzquierda = () => {
  return (
    <div className="barra-izq">
      <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#000000" backgroundColor="#ffffff">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <div className="dashboard">
                <NavLink exact to="" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Dashboard
                  </CDBSidebarMenuItem>
                </NavLink>
              </div>
              <div className="prestadores">
                <NavLink exact to="/Prestadores">
                  <CDBSidebarMenuItem icon="table">Prestadores</CDBSidebarMenuItem>
                </NavLink>
              </div>
              <NavLink
                exact
                to="/hero404"
                target=""
            
              >
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default BarraIzquierda;