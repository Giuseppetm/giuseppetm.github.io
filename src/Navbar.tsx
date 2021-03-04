import React from 'react';

window.onload = () => {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    
    menuToggle!.addEventListener("click", () => {
      navbar!.classList.toggle("open");
    });
};

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar pt-5 pb-5 ml-2 mr-2">
                    <h1 className="navbar-brand text-uppercase white">
                        GIUSEPPE DEL CAMPO
                    </h1>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link text-uppercase white active" href="#home">
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase white" href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase white" href="#projects">
                                PROJECTS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase white" href="#other">
                                OTHER
                            </a>
                        </li>
                    </ul>
                    <div className="menu-toggle">
                        <button type="button" className="navbar-toggler" id="navToggle">
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;