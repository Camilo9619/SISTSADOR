import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LOGO from '../images/LOGO.png';
import PERFIL from '../images/PERFIL.png';
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Link to="/"><img src={LOGO}alt="" classname="logotipo"/></Link>
                </li>
              </ul>
              <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text"placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="button" class="btn btn-default btn">
                        <span class="glyphicon glyphicon-star"></span> Star
                    </button>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Notificacion</a>
                    <i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i>
                    <a _ngcontent-dal-c3="" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" ngbdropdowntoggle=""><i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i></a>
                </li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Mensaje</a>
                    <i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i>
                    <a _ngcontent-dal-c3="" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" ngbdropdowntoggle=""><i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i></a>
                </li>
                <li>
                    <div className="">
                        <img src={PERFIL}alt="" className="imagen"/>
                        <i _ngcontent-dal-c3="" class="mdi mdi-bell font-24"></i>
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