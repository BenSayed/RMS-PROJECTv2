import React, { useState, useEffect } from "react";
import "./style.css";

const CookieAnimation = () => {
  const [staticCookieSrc, setStaticCookieSrc] = useState(
    "src/Page Erorr/Page500/component/Frame 37310.svg"
  );
  const [showCrumbs, setShowCrumbs] = useState(false);

  useEffect(() => {
    const handleAnimationIteration = () => {
      setStaticCookieSrc("src/Page Erorr/Page500/component/Frame 37310 (1).svg");
      setShowCrumbs(true);

      setTimeout(() => {
 
        setStaticCookieSrc( "src/Page Erorr/Page500/component/Frame 37309.svg");
        setShowCrumbs(false);
      }, 2000);
    };

    const movingCookie = document.getElementById("moving-cookie");
    if (movingCookie) {
      movingCookie.addEventListener("animationiteration", handleAnimationIteration);
    }

    return () => {
      if (movingCookie) {
        movingCookie.removeEventListener("animationiteration", handleAnimationIteration);
      }
    };
  }, []);

  return (
    <div className="contai">
      <img id="static-cookie" src={staticCookieSrc} alt="Static Cookie"  />
      <img id="moving-cookie" src="src/Page Erorr/Page500/component/Frame 37309.svg" alt="Moving Cookie" />
      {showCrumbs && (
        <img id="crumbs" src="src/Page Erorr/Page500/component/Group 34516.svg" style={{ marginLeft: '310px' , width:'30px'}} alt="Cookie Crumbs" />
      )}
    </div>
  );
};

export default CookieAnimation;