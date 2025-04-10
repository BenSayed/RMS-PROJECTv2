import React, { useState, useEffect } from "react";
import "./section4.css";
import image31 from "./1.svg";
import image32 from "./2.svg";
import image33 from "./3.svg";
import image34 from "./4.svg";
import image35 from "./Vector (1).svg";
import image36 from "./Vector@2x.svg";
import { Link } from "react-router-dom";

const foodItems = [
  {
    id: 1,
    image: image31,
    title: "Wagyu Steak ",
    description: "250g of lean steak with sous and smashed potato or rice",
    price: "25$",
    rating: 4,
    category: "mainCourses",
  },
    {
    id: 4,
    image: image31,
    title: "anal Steak ",
    description: "  with sous and smashed potato or rice",
    price: "65$",
    rating: 3,
    category: "mainCourses",
  },
  {
    id: 0,
    image: image31,
    title: "Delicious Main ",
    description: "A tempting main course option.",
    price: "25$",
    rating: 4,
    category: "mainCourses",
  },

  {
    id: 2,
    image: image32,
    title: "Another Main",
    description: "Enjoy this flavorful main dish.",
    price: "30$",
    rating: 4,
    category: "mainCourses",
  },
  {
    id: 3,
    image: image33,
    title: "Crispy Appetizer",
    description: "Start your meal with this crispy appetizer.",
    price: "10$",
    rating: 3,
    category: "appetizers",
  },
  {
    id: 3,
    image: image33,
    title: "Crispy Appetizer",
    description: "Start your meal with this crispy appetizer.",
    price: "10$",
    rating: 3,
    category: "appetizers",
  },
    {
    id: 3,
    image: image33,
    title: "Crispy Appetizer",
    description: "Start your meal with this crispy appetizer.",
    price: "10$",
    rating: 3,
    category: "appetizers",
  },
  {
    id: 4,
    image: image34,
    title: "Fresh Seafood",
    description: "Indulge in our fresh seafood selection.",
    price: "40$",
    rating: 4,
    category: "seafood",
  },
  {
    id: 5,
    image: image31,
    title: "Sweet Dessert",
    description: "End your meal with this sweet treat.",
    price: "15$",
    rating: 4,
    category: "desserts",
  },
  {
    id: 6,
    image: image32,
    title: "Refreshing  ",
    description: "Quench your thirst with our refreshing beverage.",
    price: "5$",
    rating: 4,
    category: "beverages",
  },
  {
    id: 7,
    image: image33,
    title: "Another Appetizer",
    description: "A delightful way to begin your dining experience.",
    price: "12$",
    rating: 4,
    category: "appetizers",
  },
  {
    id: 8,
    image: image34,
    title: "Grilled  Platter",
    description: "A platter of the finest grilled seafood.",
    price: "55$",
    rating: 5,
    category: "seafood",
  },
  {
    id: 9,
    image: image31,
    title: "Chocolate   Cake",
    description: "Warm chocolate cake with a molten center.",
    price: "20$",
    rating: 5,
    category: "desserts",
  },
  {
    id: 10,
    image: image32,
    title: "Iced Lemonade",
    description: "A classic and refreshing iced lemonade.",
    price: "7$",
    rating: 4,
    category: "beverages",
  },
];

const Section4 = () => {
  const [activeButton, setActiveButton] = useState("mainCourses");
  const [filteredFoodItems, setFilteredFoodItems] = useState([]); // تغيير القيمة الابتدائية لـ []

  const handleButtonClick = (category) => {
    setActiveButton(category);
    const newFilteredItems = foodItems.filter((item) => item.category === category);
    setFilteredFoodItems(newFilteredItems);
  };

  useEffect(() => {
    // عند تحميل الصفحة، يتم عرض العناصر الخاصة بـ "mainCourses" بشكل افتراضي
    handleButtonClick("mainCourses"); // استدعاء handleButtonClick مع "mainCourses" عند التحميل
  }, []);

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
              <button
                className={`navbar225 ${activeButton === "mainCourses" ? "navbar224" : ""}`}
                onClick={() => handleButtonClick("mainCourses")}
              >
                Main Courses
              </button>
              <button
                className={`navbar225 ${activeButton === "appetizers" ? "navbar224" : ""}`}
                onClick={() => handleButtonClick("appetizers")}
              >
                Appetizers
              </button>
              <button
                className={`navbar225 ${activeButton === "seafood" ? "navbar224" : ""}`}
                onClick={() => handleButtonClick("seafood")}
              >
                Seafood
              </button>
              <button
                className={`navbar225 ${activeButton === "desserts" ? "navbar224" : ""}`}
                onClick={() => handleButtonClick("desserts")}
              >
                Desserts
              </button>
              <button
                className={`navbar225 ${activeButton === "beverages" ? "navbar224" : ""}`}
                onClick={() => handleButtonClick("beverages")}
              >
                Beverages
              </button>
            </div>
          </div>

          <div className="cardsection">
            <div className="cards">
              {filteredFoodItems.map((food) => (
                <div className="card" key={food.id}>
                  <img src={food.image} alt={food.title} />
                  <div className="content">
                    <div className="cardtextandheart">
                      <h3>{food.title}</h3>
                      <img className="imgcardef" src={image36} alt="Heart Icon" />
                    </div>

                    <div className="cardpargraph">
                      <p>{food.description}</p>
                    </div>

                    <div className="cardhandelstartandprise">
                      <div className="stadprisersan">
                        {Array(food.rating)
                          .fill()
                          .map((_, i) => (
                            <span key={i}>&#9733;</span>
                          ))}
                      </div>
                      <h2>{food.price}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="buutonshowall">
            <Link to="/menu" className="show-all-button">
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