
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
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
            <NavLink exact to="" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Tabla_Prestadores" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Prestadores</CDBSidebarMenuItem>
            </NavLink>
  

            <NavLink
              exact
              to="/hero404"
              target=""
              activeClassName="activeClicked"
            >
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
