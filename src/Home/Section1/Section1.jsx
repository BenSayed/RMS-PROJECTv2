import React from 'react';
import "./Section1.css" ;
import imgeHome1 from "/HomeIMG/Section1IMG/Rectangle 1152.svg";
import imgeHome2 from "/HomeIMG/Section1IMG/Vector.svg";

const Section1 = () => {
  return (
    <div>
      <section className="section1">
              <div className=" textconteiner">
                <p className="tagline">
                  Indulge in the finest dishes in a luxurious setting, where
                  creativity meets exquisite flavor
                </p>
                <div className="Titletextconteiner"> 
                <h1 >Unforgettable Dining</h1>
                </div>
              </div>
              <div className="cotiner_img">
                <img
                  src= {imgeHome1}
                  alt=" erorr"
                />
              </div>
      
              <div className="container22">
                <div className="search-bar">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                  />
                  <button className="mic-button">
                   
                    <img src={imgeHome2} alt="" />
                  </button>
                </div>
      
                <div className="button-container">
                  <button className="button primary-button">Menu</button>
                  <button className="button secondary-button">Book a table</button>
                </div>
              </div>  
            </section>
    </div>
  );
}

export default Section1;
