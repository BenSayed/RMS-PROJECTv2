import React from "react";
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
    title: "Wagyu Steak",
    description: "250g of lean steak with sous and smashed potato or rice",
    price: "45$",
    rating: 5,
  },
  {
    id: 2,
    image: image32,
    title: "Wagyu Steak",
    description: "250g of lean steak with sous and smashed potato or rice",
    price: "45$",
    rating: 5,
  },
  {
    id: 3,
    image: image33,
    title: "Wagyu Steak",
    description: "250g of lean steak with sous and smashed potato or rice",
    price: "45$",
    rating: 5,
  },
  {
    id: 4,
    image: image34,
    title: "Wagyu Steak",
    description: "250g of lean steak with sous and smashed potato or rice",
    price: "45$",
    rating: 5,
  },
];

const Section4 = () => {
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
            <button>Main Courses</button>
            <button>Appetizers</button>
            <button>Seafood</button>
            <button>Desserts</button>
            <button>Beverages</button>
          </div>

 </div>
          

        <div className="cardsection"> 
          <div className="cards">
            {foodItems.map((food) => (
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
                <img src={image35}  alt="Arrow Icon" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
