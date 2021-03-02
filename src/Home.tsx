import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <section className="home" id="home">

      <Navbar />

      <div className="vertical-align">
        <div className="container">
          <div className="home-title-container row x-large-display">
            <h1 className="home-title yellow">
              GIUSEPPE DEL CAMPO
            </h1>
          </div>
          <div className="home-title-container large-display">
            <div className="row"><h1 className="home-title yellow">GIUSEPPE</h1></div>
            <div className="row"><h1 className="home-title yellow">DEL CAMPO</h1></div>
          </div>
          <div className="home-title-container medium-display">
            <div className="row"><h1 className="home-title yellow">GIUSEPPE</h1></div>
            <div className="row"><h1 className="home-title yellow">DEL CAMPO</h1></div>
          </div>
          <div className="home-title-container small-display">
            <h1 className="home-title yellow">
              <div className="row"><h1 className="home-title yellow">GIUSEPPE</h1></div>
              <div className="row"><h1 className="home-title yellow">DEL</h1></div>
              <div className="row"><h1 className="home-title yellow">CAMPO</h1></div>
            </h1>
          </div>

          <div className="home-description-container x-large-display">
            <p className="home-description">21 YEARS OLD | STUDENT | FRONT END DEVELOPER</p>
          </div>
          <div className="home-description-container large-display">
            <p className="home-description-underline">21 YEARS OLD</p>
            <p className="home-description-underline">STUDENT</p>
            <p className="home-description-underline">FRONT END DEVELOPER</p>
          </div>
          <div className="home-description-container medium-display">
            <p className="home-description-underline">21 YEARS OLD</p>
            <p className="home-description-underline">STUDENT</p>
            <p className="home-description-underline">FRONT END DEVELOPER</p>
          </div>
          <div className="home-description-container small-display">
            <p className="home-description-underline">21 YEARS OLD</p>
            <p className="home-description-underline">STUDENT</p>
            <p className="home-description-underline">FRONT END DEVELOPER</p>
          </div>
        </div>
      </div>

      <a href="#about"><i className="fas fa-chevron-down arrow-next-page click_to_scroll"></i></a>
    </section>
  );
}

export default Home;