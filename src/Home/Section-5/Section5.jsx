import React from "react";
import "./Section5.css";
import ImageVac from "./Vector (1).svg";
import Imagesub from "./Subtract.svg";
import { Link } from "react-router-dom";
import Imageprof from "./Rectangle 1161.svg";

const Section5 = () => {
  return (
    <div>
      <section className="section5">
        <div className="section5Contint1 border">
          <div className="section5Contint1imgText  ">
            <div className="section5Contint1imgTexth1">
              <h1 className="section5Contint1imgTexth11">Hear from our </h1>
              <h1 className="section5Contint1imgTexth112">
                {" "}
                Satisfied Clients{" "}
              </h1>
              <h1 className="section5Contint1imgTexth11">
                {" "}
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

            <img src={Imagesub} alt="" />
          </div>
          <div className="section5Contint1imgcontint  ">
            <div className="section5Contint1imgcontintcards">
              <div className="section5Contint1imgcontintcard">
                <div className="section5Contint1imgcontintcardStar">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolomod tempor
                  incididunt ut labore et dolomod t et dolore magna aliqua.”
                </p>
                <div className="section5Contint1imgcontintcardprofil">
                  <img src={Imageprof} />
                  <div className="section5Contint1imgcontintcardprofiltext">
                    <h2>Mark Larrat </h2>
                    <p> Nursing Assistant</p>
                  </div>
                </div>
              </div>




              <div className="section5Contint1imgcontintcard">
                <div className="section5Contint1imgcontintcardStar">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolomod tempor
                  incididunt ut labore et dolomod t et dolore magna aliqua.”
                </p>
                <div className="section5Contint1imgcontintcardprofil">
                  <img src={Imageprof} />
                  <div className="section5Contint1imgcontintcardprofiltext">
                    <h2>Mark Larrat </h2>
                    <p> Nursing Assistant</p>
                  </div>
                </div>
              </div>




              <div className="section5Contint1imgcontintcard">
                <div className="section5Contint1imgcontintcardStar">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolomod tempor
                  incididunt ut labore et dolomod t et dolore magna aliqua.”
                </p>
                <div className="section5Contint1imgcontintcardprofil">
                  <img src={Imageprof} />
                  <div className="section5Contint1imgcontintcardprofiltext">
                    <h2>Mark Larrat </h2>
                    <p> Nursing Assistant</p>
                  </div>
                </div>
              </div>




              <div className="section5Contint1imgcontintcard">
                <div className="section5Contint1imgcontintcardStar">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolomod tempor
                  incididunt ut labore et dolomod t et dolore magna aliqua.”
                </p>
                <div className="section5Contint1imgcontintcardprofil">
                  <img src={Imageprof} />
                  <div className="section5Contint1imgcontintcardprofiltext">
                    <h2>Mark Larrat </h2>
                    <p> Nursing Assistant</p>
                  </div>
                </div>
              </div>



              <div className="section5Contint1imgcontintcard">
                <div className="section5Contint1imgcontintcardStar">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolomod tempor
                  incididunt ut labore et dolomod t et dolore magna aliqua.”
                </p>
                <div className="section5Contint1imgcontintcardprofil">
                  <img src={Imageprof} />
                  <div className="section5Contint1imgcontintcardprofiltext">
                    <h2>Mark Larrat </h2>
                    <p> Nursing Assistant</p>
                  </div>
                </div>
              </div>



              
            </div>
          </div>
        </div>
        <div className="section5Contint2 border">
          <h2>Are u The Next One!</h2>
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
