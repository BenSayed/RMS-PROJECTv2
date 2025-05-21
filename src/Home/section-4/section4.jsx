import React, { useState, useEffect } from "react";
import "./section4.css";
import image35 from "./Vector (1).svg";
import { Link } from "react-router-dom";
import CardComponent from "/src/component/Card/CardComponent.jsx";
import axios from "axios";

const Section4 = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const baseUrl = localStorage.getItem("baseUrl");
      try {
        const response = await axios.get(`${baseUrl}/api/Menu/GetCategories`);
        setCategories(response.data);
        if (response.data.length > 0) {
          setActiveCategoryId(response.data[0].id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const baseUrl = localStorage.getItem("baseUrl");
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!activeCategoryId || !userInfo?.id) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/api/Menu/GetMenuItemsByCategory/${activeCategoryId}?userId=${userInfo.id}`
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [activeCategoryId]);

  const handleButtonClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const baseUrl = localStorage.getItem("baseUrl");

  return (
    <div>
      <section>
        <div className="section4">
          <div className="food-selection">
            <h2>
              Choose the type of <span style={{ color: "#ff9500" }}>Food</span>
            </h2>
          </div>

          {/* Navbar of categories */}
          <div className="navbarscroll">
            <div className="navbar22">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`navbar225 ${
                    activeCategoryId === cat.id ? "navbar224" : ""
                  }`}
                  onClick={() => handleButtonClick(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Section */}
          <div className="cardsection">
            <div className="cards">
              {loading ? (
                <p>Loading...</p>
              ) : menuItems.length === 0 ? (
                <p style={{ textAlign: "center", width: "100%" }}>
                  لا توجد أطعمة في هذا القسم.
                </p>
              ) : (
                menuItems.map((food, index) => {
                  const imageUrl = food.imagePath
                    ? food.imagePath.startsWith("http")
                      ? food.imagePath
                      : `${baseUrl}/${food.imagePath}`
                    : "";

                  return (
                    <CardComponent
                      key={food.id || index}
                      imgSrc={imageUrl}
                      altText={food.name}
                      title={food.name}
                      description={food.description}
                      price={food.price}
                    />
                  );
                })
              )}
            </div>
          </div>

          {/* Show All Button */}
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
