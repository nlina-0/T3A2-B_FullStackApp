import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <h1>GymFlow</h1>
                    </Link>

                    {/* hamburger menu */}
                    <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/classes">Classes</Link>
                        <Link class="navbar-item" to="/createClass">Create Class</Link>
                        <Link class="navbar-item" to="/customers">Customers</Link>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default NavBar