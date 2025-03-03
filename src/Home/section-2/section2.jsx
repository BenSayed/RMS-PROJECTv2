import React from 'react';
import  "./section2.css" ; 
import  image22 from "/HomeIMG/Section2Img/33.svg" ;
import  image23 from "/HomeIMG/Section2Img/22.svg" ;
import  image24 from "/HomeIMG/Section2Img/11.svg" ;
const Section2 = () => {
  return (
    <section className='section2'>
      <div className="features-container">
        <div> 
        <h2>Features</h2>
        </div>
        <div>
        <div className="features">
          <div className="feature">
            <img
              className="no-shadow"
              src= {image22}
              alt="Chef Icon"
            />
            <p>
              Dishes prepared by <br /> world-class chefs
            </p>
          </div>

          <div className="feature">
            <img
              className="no-shadow"
              src={image23}
              alt="Ingredients Icon"
            />
            <p>
              Fresh and local <br /> ingredients
            </p>
          </div>

          <div className="feature">
            <img
              className="no-style "
              src={image24}
              alt="Service Icon"
            />
            <p>
              Exceptional <br /> customer service
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
 
 

export default Section2;
