import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Other from './Other';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Other />
      <Footer />
    </div>
  );
}

export default App;