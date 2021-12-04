import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">STOCK TRADING LOG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/research">Reserach</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/log">Log</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li> */}
                    </ul>
                    <span class="navbar-text">
                            Welcome Kim
                    </span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup"><button type="button" class="btn btn-outline-light">Log out</button></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;