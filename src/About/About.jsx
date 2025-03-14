// @ts-ignore
import React, { useEffect } from "react";
import "./About.css";
import aboutImg1 from "./Vector.svg" ;
import aboutImg2 from "./Group.svg" ;
import aboutImg3 from "./Rectangle 1156 .svg";
import aboutImg4 from "./Rectangle 1156 (122).svg" ;
import aboutImg5 from "./Rectangle 115611.svg" ;
import aboutImg6 from "./Subtract2copy.png" ;
import aboutImg7 from "./curve text.svg" ;
import aboutImg8 from "./mingcute_arrow-up-line.svg" ;
import aboutImg9 from "./rules-restaurant-london-united-kingdom-2000x1500 1.svg" ;
import aboutImg9Mo from "./rules-restaurant-london-united-kingdom-2000x1500 1Mobil.svg" ;

import videoImg1 from "./8901901-hd_1920_1080_25fps.mp4" ;
import videoImg2 from "./8902154-hd_1920_1080_25fps.mp4" ;
 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
 // import required modules

// src/config.js
 
 


const AboutPage = () => {
  return (
    <div className="AboutPage">
      <section className="About-section1">


      <div   
  className="video-boorder" 
>  
        <video 
          src={videoImg2}
          autoPlay
          loop
          muted
          className="videoaAbout"
 
        />
      </div>

        <div className=" adderssSection">
          <div className="adderssSection23"></div>
          <h2>
            {" "}
            Crafting Culinary <br /> Excellence Since <span> 1995 </span>{" "}
            <p>Where Tradition Meets Innovation in Every Bite </p>
          </h2>
        </div>
         
      <div className="textGroup">
          <h4>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
      
        <div className="textGroup1">
          <img
            className="textGroupText"
            src={aboutImg7}
            alt=""
          />

          <img
            className="textGrouoImg"
            src={aboutImg1}
            alt=""
          />
            </div>  
        
      </section>
      <section className="About-section2">
        <div className="textAboutS2">
          <p> Our Story </p>
          <h2>
            A Legacy of <span> Flavor </span>
          </h2>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop={true}
          autoplay={{ delay: 10000 }}
          spaceBetween={"36px"}
        >
          <SwiperSlide>
            <div className="ContenerTextImgAbout">
              <h4>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h4>
              <img
                src={aboutImg9}
                alt=""
              />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="ContenerTextImgAbout">
              <h4>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h4>
              <img
                      src={aboutImg9}
                alt=""
              />
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="ContenerTextImgAbout">
              <h4>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h4>
              <img
          src={aboutImg9}                alt=""
              />
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="ContenerTextImgAbout">
              <h4>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h4>
              <img
          src={aboutImg9}                alt=""
              />
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="ContenerTextImgAbout">
              <h4>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h4>
              <img
          src={aboutImg9}                alt=""
              />
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="About-section3">
        <div className="s3 textAboutS2 ">
          <p> Our Story </p>
          <h2>
            The Art Behind Our <span> Cuisine </span>
          </h2>
        </div>
        <div className="AboutSectionGroup3">
          <div className="imgSection3">
            {" "}
            <img src={aboutImg3} alt="" />{" "}
            <div className="imgAboutSection3">
              <p> "Food is not just nourishment; it’s a symphony of senses."</p>
              <span> Chef John </span>
            </div>
          </div>
            <div className="section3Groupvid">
            <video
              src={videoImg1}
              autoPlay
              muted
              loop
              className="vidSection3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>  
        </div>
      </section>
      <section className="About-section4">
        <h2>
          Celebrated <span>Excellence </span>
        </h2>
        <div className="section4Fristclass">
          <div className="section4Group1">
            <img src={aboutImg3} alt="" />
            <div className="section4Group1Text">
              <div className="section4Group1TextAdrees">
                <h2> John White </h2>
                <p>Executive Chef</p>
              </div>
            </div>
          </div>
          <div className="section4Group2">
            <img src={aboutImg4} alt="" />
            <div className="section4Group2Text">
              <div className="section4Group233TextAdrees">
                <h2> Darlene Robertson </h2>
                <p> Chef de Partie </p>
              </div>
            </div>
          </div>
          <div className="section4Group3">
            <img src={aboutImg5} alt="" />
            <div className="section4Group3Text">
              <div className="section4Group1TextAdrees">
                <h2> Robert Fox </h2>
                <p>Commis Chef</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section4FristclassButten">
          <button className="section4FristclassButten1">
            <img src={aboutImg8} alt="" />
          </button>
          <button className="section4FristclassButten2">
            <img src={aboutImg2} alt="" />{" "}
          </button>
        </div>
      </section>  
    </div>
  );
};

export default AboutPage;
