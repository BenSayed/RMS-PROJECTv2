import React from "react";
import "./section4.css";
import image31 from "./1.svg";
import image32 from "./2.svg";
import image33 from "./3.svg";
import image34 from "./4.svg";
import image35 from "./Vector (1).svg";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div>
      <section >
         <div className="section4"> 


          <div className="food-selection">
            <h2>
              Choose the type of <span style={{ color: "#ff9500" }}>Food</span>
            </h2>
          </div>



          <div className="navbar22">
            <button>Main Courses</button>
            <button>Appetizers</button>
            <button>Seafood</button>
            <button>Desserts</button>
            <button>Beverages</button>
          </div>



          <div className="cards">
            <div className="card">
              <img src={image31} alt="Wagyu Steak" />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img src={image32} alt="Lobster Roll" />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img src={image33} alt="Pasta Carbonara" />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img src={image34} alt="Cheesecake" />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>
          </div>
          <div className="buutonshowall">
            <Link to="/menu" className="show-all-button" >
            <span>Show All</span>
            
            <div className="icon-container">
            <img src={image35} alt="" />
        
                </div>
                      </Link>
      </div>
          </div>

    

           
         
         
      </section>
    </div>
  );
};

export default Section4;
