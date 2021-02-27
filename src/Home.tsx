import React from 'react';
import Navbar from './Navbar';
import { Container } from 'reactstrap';

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="vertical-align">
        <Container className="center">
          <div>
            <h1 className="home-title display-1">GIUSEPPE DEL CAMPO</h1>
          </div>
          <div className="home-description">21 YEARS OLD | STUDENT | FRONT END DEVELOPER | PROGRAMMER</div>
        </Container>
      </div>
    </section>
  );
}

export default Home;