import React, { useState } from "react";
import "./S3.css";
import imgGrilledVegetables from "./Rectangle 1153.svg";
import imgMushroomSauce from "./Rectangle 1153 (1).svg";
import imgGarlicSauce from "./Rectangle 1153 (2).svg";
import imgFrenchFries from "./Rectangle 1153 (3).svg";
import imgCaesarSalad from "./Rectangle 1153 (4).svg";
import imgGarlicBread from "./Rectangle 1153 (5).svg";
import imgParmesanCheese from "./Rectangle 1153 (6).svg";
import imgCrispyOnionRings from "./Rectangle 1153 (7).svg";
import imgAvocadoSlices from "./Rectangle 1153 (8).svg";

const extras = [
  { name: "Grilled Vegetables", price: "1.5$", image: imgGrilledVegetables },
  { name: "Mushroom Sauce", price: "2.5$", image: imgMushroomSauce },
  { name: "Garlic Sauce", price: "1.5$", image: imgGarlicSauce },
  { name: "French Fries", price: "4.99$", image: imgFrenchFries },
  { name: "Caesar Salad", price: "6$", image: imgCaesarSalad },
  { name: "Garlic Bread", price: "5.99$", image: imgGarlicBread },
  { name: "Parmesan Cheese", price: "8$", image: imgParmesanCheese },
  { name: "Crispy Onion Rings", price: "4.5$", image: imgCrispyOnionRings },
  { name: "Avocado Slices", price: "3$", image: imgAvocadoSlices }
];

const S3 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    setSelectedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="extras-container">
      <h2 className="extras-title">Extras</h2>
      <div className="extras-grid">
        {extras.map((item, idx) => (
          <button
            key={idx}
            className={`extra-item ${selectedItems.includes(idx) ? "selected" : ""}`}
            onClick={() => handleSelect(idx)}
          >
            <img src={item.image} alt={item.name} className="extra-image" />
            <div className="extra-content">
              <span className="extra-name">{item.name}</span>
              <span className="extra-price">{item.price}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default S3;