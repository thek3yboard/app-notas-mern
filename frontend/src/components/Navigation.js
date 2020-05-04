import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/js/src/collapse.js"
import '../App.css'
import Logo from '../logo.svg'

export default class Navigation extends Component {
    
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Mis Notas</Link>
                    <button 
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" activeClassName="active">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create" activeClassName="active">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user" activeClassName="active">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
