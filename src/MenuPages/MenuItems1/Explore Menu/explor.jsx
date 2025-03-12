import React from "react";
import "./menu.css";
 const menuItems = Array(8).fill({
  name: "Wagyu Steak",
  description: "250g of lean steak with sous and smashed potato or rice",
  price: "68$",
  rating: 5,
  heartImg: "src/page-index/MenuPage/Explore Menu/solar_heart-bold (2).svg",
});

const MenuComponent = () => {
  return (
    <div>
       
      <div className="menu-container">
        <h2>Explore Menu</h2>{" "}
        <button className="buutton">
          Show All{" "}
          <span className="arroow">
            <img src="src/page-index/Banar/Vector (6).svg" alt="" />
          </span>
        </button>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Top Deals</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Bestsellers</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Main Courses</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Appetizers</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Seafood</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Desserts</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Beverages</h2>
        <div className="menu-grid">
          {menuItems.slice(4).map((item, index) => (
            <div key={index} className="menu-card">
              <div className="image-placeholder">
                <img
                  src="src/page-index/MenuPage/Explore Menu/Rectangle 1153.svg"
                  alt=""
                />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="heart">
                  <img src={item.heartImg} />
                </div>
                <div className="menu-footer">
                  <span className="star6">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <img
                          key={i}
                          src="src/page-index/MenuPage/Explore Menu/Vector (4).svg"
                          alt="star"
                        />
                      ))}
                  </span>
                  <span className="price4">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-icon"></div>
      </div>
    </div>
  );
};
export default MenuComponent;
