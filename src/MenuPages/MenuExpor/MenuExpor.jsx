import React from 'react';
import "./MenuExpor.css";
import Banner from '../MenuItems1/Banar/banarMenu';

const MenuExpor = () => {
  return (
    <div  >
      <Banner /> 
    <div className="MenuExporPage">
        
        <div className="food-selection0">
            <h2>Main Courses</h2>
          </div>
        <section className='MenuExporSction'>
        
          <div className="cardss">
            <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="2"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
                <Card
              id="1"
              imgSrc="src/MenuPages/MenuExpor/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/MenuPages/MenuExpor/solar_heart-bold (2).svg"
            />
      
      
       
            {/* يمكنك إضافة المزيد من البطاقات هنا */}
          </div>
        </section>
    </div>
    </div>
  );
};

const Card = ({ id, imgSrc, altText, title, description, price, heartImg }) => {
  return (
    <section className="ExploreMenuCard" id={id}>
      <div className="cardd">
        <img src={imgSrc} alt={altText} />
        <div className="content">
          <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          </div>
          <div className="price">{price}</div>
          <div className="heart">
            <img src={heartImg} alt={altText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuExpor;
