import React from 'react'
import { PiShoppingCartBold } from "react-icons/pi";
import { Outlet, Link } from "react-router-dom";
import '../App.css';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E_Comm</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className='nav-link'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className='nav-link'>Cart</Link>
                        </li>

                    </ul>
                    <div className='d-flex justify-content-end'>
                        <ul className="navbar-nav">
                            <li className="nav-link pt-3">
                                <Link to="/login"> <button className='btn btn-primary d-flex align-items-center justify-content-center' id="login-btn" style={{ height: "35px", width: "60px" }}>Login </button> </Link>
                               
                            </li>
                            <li className="nav-link d-flex align-items-center">
                                <Link to="/cart"className='nav-link'><h3><PiShoppingCartBold /></h3> </Link>
                         
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Navbar