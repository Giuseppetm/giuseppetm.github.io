import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Other from './Other';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

const App = () => {
  return (
    <Router>
      <ParticleComponent />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Home />
        <About />
        <Projects />
        <Other />
        <Footer />
        </div>
    </Router>
  );
}

export default App;