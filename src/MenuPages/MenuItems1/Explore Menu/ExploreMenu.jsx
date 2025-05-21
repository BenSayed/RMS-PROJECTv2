import React, { useEffect, useState } from "react";
import "./ExploreeMenu.css";
import ArrowIcon1 from "../Banar/Vector (6).svg";
import heartImg from "./solar_heart-bold (2).svg";
import heartImg2 from "./solar_heart-bold.svg"; // الصورة التانية
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ id, imagePath, name, description, price, averageRating }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false); // للتحكم في صورة القلب

  const handleCardClick = () => {
    navigate(`/MenuItem/${id}`);
  };

  const toggleHeart = (e) => {
    e.stopPropagation(); // عشان ما يفتحش صفحة المنتج
    setIsLiked((prev) => !prev);
  };

  return (
    <section
      className="MainCoursesContintExploreMenuCardssection"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="cardd1">
        <img src={imagePath} alt={name} />
        <div className="content1">
          <div className="text1">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="stars12">
              {"★".repeat(averageRating)}{"☆".repeat(5 - averageRating)}
            </div>
          </div>
          <div className="price12">{price}$</div>
          <div
            className="heart112"
            onClick={toggleHeart}
            style={{ cursor: "pointer" }}
          >
            <img src={isLiked ? heartImg2 : heartImg} alt="heart" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExploreMenu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [menuItemsByCategory, setMenuItemsByCategory] = useState({});

  const baseUrl = localStorage.getItem("baseUrl");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo?.id;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/Menu/GetCategories`);
        setCategories(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, [baseUrl]);

  useEffect(() => {
    if (categories.length === 0 || !userId) return;

    const fetchMenuItems = async () => {
      try {
        const promises = categories.map((category) =>
          axios.get(`${baseUrl}/api/Menu/GetMenuItemsByCategory/${category.id}?userId=${userId}`)
        );
        const results = await Promise.all(promises);
        const itemsMap = {};
        categories.forEach((category, index) => {
          itemsMap[category.id] = results[index].data;
        });
        setMenuItemsByCategory(itemsMap);
      } catch (err) {
        console.error("❌ Error fetching menu items by category:", err);
      }
    };

    fetchMenuItems();
  }, [categories, userId, baseUrl]);

  const handleShowAllClick = () => {
    navigate("/MainCourses");
  };

  const SectionTitle = ({ title, categoryId }) => {
    const cards = menuItemsByCategory[categoryId] || [];

    if (cards.length === 0) return null;

    return (
      <div className="MainCoursesContintTopDealsGroup">
        <div className="MainCoursesContintTopDeals">
          <div className="MainCoursesContintExploreMenuText">
            <h2>{title}</h2>
          </div>
          <div className="MainCoursesContintTopDealsAllButton">
            <button onClick={handleShowAllClick}>
              Show All
              <span className="MainCoursesArrow">
                <img src={ArrowIcon1} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
        <div className="MainCoursesContintExploreMenuCards">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="MainCourses">
      <div className="MainCoursesContint">
        <div className="MainCoursesContintExploreMenugroup"></div>
        {categories.map((category) => (
          <SectionTitle
            key={category.id}
            title={category.name}
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
