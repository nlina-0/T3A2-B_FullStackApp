import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <h1>GymFlow</h1>
                    </Link>

                    {/* hamburger menu */}
                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/classes">Classes</Link>
                        <Link className="navbar-item" to="/createClass">Create Class</Link>
                        <Link className="navbar-item" to="/customers">Customers</Link>
                        <Link className="navbar-item" to="/userSettings">User Settings</Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-light" to="/login">
                            Log in
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
    </>
  )
}

export default NavBar