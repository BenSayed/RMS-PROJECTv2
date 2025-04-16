import React from "react";
import "./CardComponent.css";
import heartImg from "/src/MenuPages/MainCoourses/solar_heart-bold (2).svg";

const CardComponent = ({ id, imgSrc, altText, title, description, price }) => {
  return (
    <section className="cardd1" id={id}>
      <img src={imgSrc} alt={altText} />
      <div className="content1">
        <div className="text1">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="stars12">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        </div>
        <div className="price12">{price}</div>
        <div className="heart112">
          <img src={heartImg} alt="heart" />
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
