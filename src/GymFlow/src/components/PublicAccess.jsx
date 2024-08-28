import React from 'react'
import { Link } from "react-router-dom"

const PublicAccess = () => {
  return (
    <>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/public">
                            <h1>GymFlow</h1>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-light" to="/login">
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </nav>
        </>
  )
}

export default PublicAccess