import React from 'react';
import './S4.css';
import steakImg from './Rectangle 11.svg';  

const RandomCard = () => (
  <div className="box7">
    <img src={steakImg} alt="Wagyu Steak" className="img91" />
    <div className="txt99">
      <h3>Wagyu Steak</h3>
      <p>250g of lean steak with sous and smashed potato or rice</p>
      <div className="line55">
        <span className="star77">★★★★★</span>
        <span className="price44">68$</span>
      </div>
    </div>
  </div>
);

const S4 = () => {
  return (
    <section className="wrap88">
      <h2 className="head33">Combo Options</h2>
      <div className="grid22">
        {Array(5).fill(0).map((_, i) => (
          <RandomCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default S4;



