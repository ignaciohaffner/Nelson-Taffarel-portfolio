import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#id">Nelson Taffarel</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto">
                                <a className="nav-link active" aria-current="page" href="#id">Inicio</a>
                                <a className="nav-link active" href="#id">Portfolio</a>
                                <a className="nav-link active" href="#id">Contactame</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
  )
}

export default Navbar