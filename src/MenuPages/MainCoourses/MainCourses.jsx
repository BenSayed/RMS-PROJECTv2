import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./MainCoourses.css";
import Banner from '../MenuItems1/Banar/banarMenu';
import CardComponent from "/src/component/Card/CardComponent.jsx"; // ← استدعاء الكمبوننت الموحدة

const MainCourses = () => {
  const [menuItems, setMenuItems] = useState([]);

  const baseUrl = 'http://flavorhaven.runasp.net';
  const categoryId = 'c27ae538-dbe1-401a-8171-5be5b4314e2c';  
  const userId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/Menu/GetMenuItemsByCategory/${categoryId}?userId=${userId}`);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <Banner />
      <div className="MenuExporPage">
        <div className="food-selection0">
          <h2>Main Courses</h2>
        </div>
        <section className='MenuExporSction'>
          <div className="cardss">
            {menuItems.map((item) => (
              <CardComponent
                key={item.id}
                id={item.id}
                imgSrc={item.imagePath || 'https://via.placeholder.com/150'}
                altText={item.name}
                title={item.name}
                description={item.description}
                price={`${item.price}$`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainCourses;
