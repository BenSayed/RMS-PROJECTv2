import React from 'react';
import "./section3.css" ;
import  image32 from "./Rectangle 1156.svg" ;
import { Link } from 'react-router-dom';
const Section3 = () => {
  return (
    <div>
      <section className='section3'>
        <div className="container">
          <h1 className="heading">
            Our Expects <span>Chefs</span>
          </h1>
          <div className="chef-image">
          <Link to="/about">
  <img 
    src={image32}
    alt="Chef Image"
  />
</Link>



 




          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
