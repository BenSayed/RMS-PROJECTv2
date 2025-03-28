import React from 'react';
import "./MainCoourses.css";
import Banner from '../MenuItems1/Banar/banarMenu';

import heartImg from './solar_heart-bold (2).svg';
import imgSrc from './Rectangle 1153 (1).svg';

const MainCourses = () => {
  return (
    <div  >
  <Banner/>
    <div className="MenuExporPage">
        
        <div className="food-selection0">
            <h2>Main Courses</h2>
          </div>
        <section className='MenuExporSction'>
        
          <div className="cardss">
            <Card
              id="1"
              imgSrc={imgSrc}
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="90$"
              heartImg={heartImg}
            />
              <Card
              id="1"
              imgSrc={imgSrc}
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="33$"
              heartImg={heartImg}
            /><Card
            id="1"
            imgSrc={imgSrc}
            altText="Wagyu Steak"
            title="Wagyu Steak"
            description="250g of lean steak with sous smashed potato or rice"
            price="43$"
            heartImg={heartImg}
          /><Card
          id="1"
          imgSrc={imgSrc}
          altText="Wagyu Steak"
          title="Wagyu Steak"
          description="250g of lean steak with sous smashed potato or rice"
          price="28$"
          heartImg={heartImg}
        /><Card
        id="1"
        imgSrc={imgSrc}
        altText="Wagyu Steak"
        title="Wagyu Steak"
        description="250g of lean steak with sous smashed potato or rice"
        price="78$"
        heartImg={heartImg}
      /><Card
      id="1"
      imgSrc={imgSrc}
      altText="Wagyu Steak"
      title="Wagyu Steak"
      description="250g of lean steak with sous smashed potato or rice"
      price="78$"
      heartImg={heartImg}
    /><Card
    id="1"
    imgSrc={imgSrc}
    altText="Wagyu Steak"
    title="Wagyu Steak"
    description="250g of lean steak with sous smashed potato or rice"
    price="78$"
    heartImg={heartImg}
  /><Card
  id="1"
  imgSrc={imgSrc}
  altText="Wagyu Steak"
  title="Wagyu Steak"
  description="250g of lean steak with sous smashed potato or rice"
  price="78$"
  heartImg={heartImg}
/><Card
              id="1"
              imgSrc={imgSrc}
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg={heartImg}
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

export default MainCourses;
