import React, { useState, useMemo } from "react";
import "./section4.css";
import image31 from "./1.svg";
import image32 from "./2.svg";
import image33 from "./3.svg";
import image34 from "./4.svg";
import image35 from "./Vector (1).svg";
import { Link } from "react-router-dom";
import CardComponent from "/src/component/Card/CardComponent.jsx";
  
const foodItems = [
  { id: 1, image: image31, title: "Wagyu Steak", description: "250g of lean steak With sous and potato With", price: "25$", rating: 4, category: "mainCourses" },
  { id: 2, image: image31, title: "Anal Steak", description: "With sous and potato", price: "65$", rating: 3, category: "mainCourses" },
  { id: 3, image: image32, title: "Delicious Main", description: "Tempting main course", price: "25$", rating: 4, category: "mainCourses" },
  { id: 4, image: image32, title: "Another Main", description: "Flavorful main dish", price: "30$", rating: 4, category: "mainCourses" },
  { id: 5, image: image33, title: "Crispy Appetizer", description: "Crispy starter", price: "10$", rating: 3, category: "appetizers" },
  { id: 6, image: image33, title: "Appetizer 2", description: "Another appetizer", price: "10$", rating: 3, category: "appetizers" },
  { id: 7, image: image33, title: "Appetizer 3", description: "Yummy starter", price: "10$", rating: 3, category: "appetizers" },
  { id: 8, image: image34, title: "Fresh Seafood", description: "Fresh seafood selection", price: "40$", rating: 4, category: "seafood" },
  { id: 9, image: image31, title: "Sweet Dessert", description: "Sweet treat", price: "15$", rating: 4, category: "desserts" },
  { id: 10, image: image32, title: "Refreshing", description: "Cool beverage", price: "5$", rating: 4, category: "beverages" },
  { id: 11, image: image33, title: "Another Appetizer", description: "Great starter", price: "12$", rating: 4, category: "appetizers" },
  { id: 12, image: image34, title: "Grilled Platter", description: "Grilled seafood", price: "55$", rating: 5, category: "seafood" },
  { id: 13, image: image31, title: "Chocolate Cake", description: "Molten chocolate", price: "20$", rating: 5, category: "desserts" },
  { id: 16, image: image31, title: "Chocolate Cake", description: "Molten chocolate", price: "20$", rating: 5, category: "desserts" },

  { id: 14, image: image32, title: "Iced Lemonade", description: "Refreshing drink", price: "7$", rating: 4, category: "beverages" },
];

const Section4 = () => {
  const [activeButton, setActiveButton] = useState(() => {
    return localStorage.getItem("activeCategory") || "mainCourses";
  });

  const filteredFoodItems = useMemo(() => {
    return foodItems.filter((item) => item.category === activeButton);
  }, [activeButton]);

  const handleButtonClick = (category) => {
    setActiveButton(category);
    localStorage.setItem("activeCategory", category);
  };

  return (
    <div>
      <section>
        <div className="section4">
          <div className="food-selection">
            <h2>
              Choose the type of <span style={{ color: "#ff9500" }}>Food</span>
            </h2>
          </div>

          <div className="navbarscroll">
            <div className="navbar22">
              {["mainCourses", "appetizers", "seafood", "desserts", "beverages"].map((cat) => (
                <button
                  key={cat}
                  className={`navbar225 ${activeButton === cat ? "navbar224" : ""}`}
                  onClick={() => handleButtonClick(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="cardsection">
            <div className="cards">
              {filteredFoodItems.map((food, index) => (
                <CardComponent
                  key={food.id || index}
                  image={food.image}
                  title={food.title}
                  description={food.description}
                  price={food.price}
                  rating={food.rating}
                />
              ))}
            </div>
          </div>

          <div className="buutonshowall">
            <Link to="/MenuItems" className="show-all-button">
              <span>Show All</span>
              <div className="icon-container">
                <img src={image35} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
