import React, { useState, useEffect } from "react";
import "./Section1.css";
import imgeHome1 from "/HomeIMG/Section1IMG/Rectangle 1152.svg"; // صورة سطح المكتب
import imgeHome2 from "/HomeIMG/Section1IMG/Vector.svg";
import imgMobile from "./Rectangle 1152.svg"; // صورة الموبايل
import { Link } from "react-router-dom";
import axios from "axios"; // ضفنا axios

const Section1 = () => {
  const [imageSrc, setImageSrc] = useState(imgeHome1);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 

  const baseUrl = "http://flavorhaven.runasp.net";

  const handleResize = () => {
    if (window.innerWidth <= 425) {
      setImageSrc(imgMobile);
    } else {
      setImageSrc(imgeHome1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return; // لو البحث فاضي ميبعتش
    try {
      const response = await axios.get(`${baseUrl}/api/Menu/SearchMenuItems`, {
        params: { query: searchQuery },
      });
      console.log("نتائج البحث:", response.data);
      setSearchResults(response.data); 
    } catch (error) {
      console.error("خطأ أثناء البحث:", error);
    }
  };

  // لما يدوس انتر في الانبوت
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <section className="section1">
        <div className="textconteiner">
          <p className="tagline">
            Indulge in the finest dishes in a luxurious setting, where creativity meets exquisite flavor
          </p>
          <div className="Titletextconteiner">
            <h1>Unforgettable Dining</h1>
          </div>
        </div>

        <div className="cotiner_img">
          <img src={imageSrc} alt="Home Image" />
        </div>

        <div className="container22">
          <div className="search-bar">
            <input 
              type="text" 
              className="search-input1" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown} // هنا ضفنا الحدث
            />
            <button className="mic-button" onClick={handleSearch}>
              <img src={imgeHome2} alt="Search Icon" />
            </button>
          </div>

          <div className="button-container2">
            <Link to="/MenuItems">
              <button className="button primary-button">Menu</button>
            </Link>
            <button className="button secondary-button">Book a table</button>
          </div>

          {/* عرض نتائج البحث */}
          {searchResults.length > 0 && (
            <div className="search-results">
              <ul>
                {searchResults.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section1;
