import React, { useState } from "react";
import "./Section5.css";
import ImageVac from "./Vector (1).svg";
import Imagesub from "./Subtract.svg";
import { Link } from "react-router-dom";
import Imageprof from "./Rectangle 1161.svg";

const Section5 = () => {
  // البيانات التي سيتم تكرارها
  const reviews = [
    {
      id: 1,
      name: "Mark Larrat",
      position: "Nursing Assistant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod t et dolore magna aliqua.",
      image: Imageprof
    },
    {
      id: 2,
      name: "Anna Smith",
      position: "Doctor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod t et dolore magna aliqua.",
      image: Imageprof
    },
    {
      id: 3,
      name: "John Doe",
      position: "Nurse",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod t et dolore magna aliqua.",
      image: Imageprof
    },
    {
      id: 4,
      name: "Lisa Ray",
      position: "Therapist",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod t et dolore magna aliqua.",
      image: Imageprof
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "Medical Assistant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod t et dolore magna aliqua.",
      image: Imageprof
    }
  ];

  // state لتحديد الكلاس عندما يمر الماوس على العنصر
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <div>
      <section className="section5">
        <div className="section5Contint1 border">
          <div className="section5Contint1imgText">
            <div className="section5Contint1imgTexth1">
              <h1 className="section5Contint1imgTexth11">Hear from our </h1>
              <h1 className="section5Contint1imgTexth112">
                Satisfied Clients
              </h1>
              <h1 className="section5Contint1imgTexth11">
                have to say{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fontSize={15}
                  fill="rgb(243, 156, 16)"
                  width="50"
                  height="50"
                  color="#FF9500"
                  className="section5Contint1imgTexth11hert"
                >
                  <path d="M50 91C48.6 91 47.2 90.6 46 89.8C25.9 76.1 10 61.4 10 41.7C10 29.6 20.6 19 32.7 19C39.3 19 45.3 22.1 49 27.4C52.7 22.1 58.7 19 65.3 19C77.4 19 88 29.6 88 41.7C88 61.4 72.1 76.1 52 89.8C50.8 90.6 49.4 91 48 91Z" />
                </svg>{" "}
              </h1>
            </div>

            <div className="section5Contint1imgTextimg">
              <img src={Imagesub} alt="" />
              <h2>+8.4k</h2>
            </div>
          </div>
          <div className="section5Contint1imgcontint">
            <div className="section5Contint1imgcontintcards">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={`section5Contint1imgcontintcard ${
                    hoveredCardId === review.id ? "hoveredCard" : ""
                  }`}
                  onMouseEnter={() => setHoveredCardId(review.id)} // عند مرور الماوس
                  onMouseLeave={() => setHoveredCardId(null)} // عند مغادرة الماوس
                >
                  <div className="section5Contint1imgcontintcardStar">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                  <p>{review.text}</p>
                  <div className="section5Contint1imgcontintcardprofil">
                    <img src={review.image} alt="Profile" />
                    <div className="section5Contint1imgcontintcardprofiltext">
                      <h2>{review.name}</h2>
                      <p>{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section5Contint2 border">
          <h2>Are you The Next One!</h2>
          <Link to="/menu" className="show-all-buttonSection5">
            <span>Join Now</span>

            <div className="icon-container">
              <img src={ImageVac} alt="" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Section5;
