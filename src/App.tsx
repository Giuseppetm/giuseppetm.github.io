import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Other from './Other';
import Footer from './Footer';
import ParticleComponent from "./ParticleComponent";

const App = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 50
        }}
      >
        <ParticleComponent />
      </div>
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0
          }}
        >
      <Home />
      <About />
      <Projects />
      <Other />
      <Footer />
      </div>
    </div>
  );
}

export default App;