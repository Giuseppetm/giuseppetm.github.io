import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg pt-5 pb-5 ml-2 mr-2">
                <div className="container">
                    <a href="#home" className="navbar-brand text-uppercase white">GIUSEPPE DEL CAMPO</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler navbar-toggler-right">
                        <i className="fa fa-bars"></i>
                    </button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
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
        </header>
    );
}

export default Navbar;