import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Navbar = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg pt-5 pb-5 ml-2 mr-2">
            <Container>
                <a href="#" className="navbar-brand text-uppercase">GIUSEPPE DEL CAMPO</a>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                    <i className="fa fa-bars"></i>
                </button>
                
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="www.google.it" className="nav-link text-uppercase">HOME<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="www.google.it" className="nav-link text-uppercase">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a href="www.google.it" className="nav-link text-uppercase">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a href="www.google.it" className="nav-link text-uppercase">OTHER</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    </header>
  );
}

export default Navbar;