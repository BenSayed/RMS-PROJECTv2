import React from "react";
import { useNavigate } from "react-router-dom";  // استيراد useNavigate للتوجيه
import "./ExploreeMenu.css";
import ArrowIcon1 from "../Banar/Vector (6).svg";
import heartImg from "./solar_heart-bold (2).svg";
import imgSrc from "./Rectangle 1153 (1).svg";

const ExploreMenu = () => {
  const navigate = useNavigate();  // تهيئة التوجيه

  // دالة لتوجيه المستخدم إلى صفحة MainCourses
  const handleShowAllClick = () => {
    navigate("/MainCourses");
  };

  const SectionTitle = ({ title, cards }) => {
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
                <img src={ArrowIcon1} alt="" />
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

  const Card = ({ id, altText, title, description, price }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate("/MenuItem");
    };

    return (
      <section
        className="MainCoursesContintExploreMenuCardssection"
        id={id}
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className="cardd1">
          <img src={imgSrc} alt={altText} />
          <div className="content1">
            <div className="text1">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="stars12">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            </div>
            <div className="price12">{price}</div>
            <div className="heart112">
              <img src={heartImg} alt={altText} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const cardDataTopDeals = [
    {
      id: "1",
      altText: "Wagyu Steak",
      title: "Wagyu Steak",
      description: "250g of lean steak with sous smashed potato or rice",
      price: "90$",
    },
    {
      id: "2",
      altText: "Wagyu Steak",
      title: "Wagyu Steak",
      description: "250g of lean steak with sous smashed potato or rice",
      price: "90$",
    },
    {
      id: "3",
      altText: "Chicken Salad",
      title: "Chicken Salad",
      description: "Fresh vegetables with grilled chicken",
      price: "50$",
    },
    {
      id: "4",
      altText: "Burger",
      title: "Deluxe Burger",
      description: "Beef burger with cheese and fresh toppings",
      price: "20$",
    },
  ];

  const cardDataBestsellers = [
    {
      id: "1",
      altText: "Salmon",
      title: "Grilled Salmon",
      description: "Grilled salmon with lemon butter",
      price: "40$",
    },
    {
      id: "2",
      altText: "Pasta",
      title: "Creamy Pasta",
      description: "Pasta in a creamy white sauce",
      price: "25$",
    },
    {
      id: "3",
      altText: "Steak",
      title: "Ribeye Steak",
      description: "Juicy ribeye steak with side of veggies",
      price: "60$",
    },
    {
      id: "4",
      altText: "Pizza",
      title: "Margherita Pizza",
      description: "Classic Margherita pizza with fresh basil",
      price: "18$",
    },
  ];

  const cardDataMainCourses = [
    {
      id: "1",
      altText: "Lamb Chops",
      title: "Lamb Chops",
      description: "Grilled lamb chops with mint sauce",
      price: "80$",
    },
    {
      id: "2",
      altText: "Fish Tacos",
      title: "Fish Tacos",
      description: "Crispy fish with avocado and salsa",
      price: "25$",
    },
    {
      id: "3",
      altText: "Beef Burrito",
      title: "Beef Burrito",
      description: "Beef burrito with cheese and beans",
      price: "20$",
    },
    {
      id: "4",
      altText: "Chicken Wings",
      title: "Spicy Chicken",
      description: "Spicy chicken wings with dipping sauce",
      price: "15$",
    },
  ];

  return (
    <div>
      <div className="MainCourses">
        <div className="MainCoursesContint">
          <div className="MainCoursesContintExploreMenugroup">
            <div className="MainCoursesContintExploreMenu">
              <div className="MainCoursesContintExploreMenuText">
                <h2>Explore Menu</h2>
              </div>
              <div className="MainCoursesContintExploreMenuButton">
                <button onClick={handleShowAllClick}>
                  Show All
                  <span className="MainCoursesArrow">
                    <img src={ArrowIcon1} alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="MainCoursesContintExploreMenuCards">
              {cardDataMainCourses.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          </div>

          {/* عرض الأقسام مع الكروت المختلفة */}
          <SectionTitle title="Top Deals" cards={cardDataTopDeals} />
          <SectionTitle title="Bestsellers" cards={cardDataBestsellers} />
          <SectionTitle title="Main Courses" cards={cardDataMainCourses} />
          <SectionTitle title="Appetizers" cards={cardDataTopDeals} />
          <SectionTitle title="Seafood" cards={cardDataBestsellers} />
          <SectionTitle title="Desserts" cards={cardDataTopDeals} />
          <SectionTitle title="Beverages" cards={cardDataBestsellers} />
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
