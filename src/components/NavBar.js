import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LOGO from '../images/LOGO.png';
import '../css/Navbar.css';
class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return(
            <nav class="d-flex top-navbar navbar-expand-md navbar-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Link to="/Home"><img src={LOGO}alt="" className="logo"/></Link>
                </li>
              </ul>
              <form onSubmit={this.handleSubmit}>
                    <div className="barra-busqueda">
                        <label>
                            <input type="text"placeholder="Search" className="busqueda" value={this.state.value} onChange={this.handleChange} />
                                <i class="fa fa-times" aria-hidden="true">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </i>
                        </label>
                        <button type="button" class="boton-busqueda">
                            <div className="">
                                <a><span class="glyphicon glyphicon-star"><i class="fas fa-search"></i></span></a>
                            </div>
                        </button>
                    </div>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li>
                    <div className="icono">
                        <a href="#"><span class="glyphicon glyphicon-user"></span>  <i className="fas fa-bell"></i></a>
                        <a _ngcontent-dal-c3="" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" ngbdropdowntoggle=""><i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i></a>
                    </div>
                </li>
                <li>
                    <div className="icono">
                        <a href="#"><span class="glyphicon glyphicon-user"></span> <i className="fas fa-comment-alt"></i></a>
                        <a _ngcontent-dal-c3="" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" ngbdropdowntoggle=""><i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i></a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#"><span class="glyphicon glyphicon-user"></span> <i className="fas fa-user"></i></a>
                        <a _ngcontent-dal-c3="" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" ngbdropdowntoggle=""><i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i></a>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;