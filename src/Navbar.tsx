import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-offcanvas pt-5 pb-5 ml-2 mr-2">
            <div className="container">

                {/* Navbar-brand */}
                <a href="#home" className="navbar-brand text-uppercase white">GIUSEPPE DEL CAMPO</a>

                {/* Navbar toggler */}
                <button type="button" className="navbar-toggler d-block" id="navToggle">
                <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                </button>

                {/* Navbar collapse */}
                <div className="navbar-collapse offcanvas-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link text-uppercase white">HOME<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link text-uppercase white">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link text-uppercase white">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#other" className="nav-link text-uppercase white">OTHER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;