import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Al trote</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                           <li className={this.getNavLinkClass("/")}><NavLink to="/" >Listar</NavLink></li>
                           <li className={this.getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;