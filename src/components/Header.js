import React , {Component} from "react";
import Form from "./Form" ;
// import {Link} from "react-router-dom" ;
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends React.Component {

    constructor(props){
        super(props)
       this.state = {
           showForm : false 
       }
       
    }
    
    

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        ApniShala
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-warning mx-2" type="submit">Volunteer Registeration</button>
                            <Router>
                            <Link to = "/admin">
                            <button className="btn btn-warning" type="submit" >Admin Login</button></Link>
                            </Router>
                        </form>
                    </div>
                </div>
            </nav>

            
            </>
        );
    }
};

export default Header;