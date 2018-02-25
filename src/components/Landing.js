import React from 'react';
import { Carousel } from 'react-bootstrap';

const LandingPage = () =>
  <div>
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="home.jpg" />
        <Carousel.Caption>
          <h3>Welcome on React-firebase</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>;
  </div>

export default LandingPage;