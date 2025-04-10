import React from "react";
import "./PageEror404.css";
import BurgerLayers from "./comp/BurgerLayers";
const PageEror404 = () => {
  return (
    <div className="PageEror404">
      <div className="PageEror404contint  ">

        <div className="PageEror404contintBox  ">
          <div className="PageEror404contintGrop  ">
            <h2>4</h2>
            <div className="PageEror404contintGropBurger  ">   <BurgerLayers /> </div>
            <h2>4</h2>
          </div>

 
          <div className="PageEror404contintBoxButton  " > 
             <h3>Page not found <br />
             We working on it</h3>
            <button>
            Back to Home   <div className="PageEror404contintBoxButtonimg">  <img src="src/Page Erorr/page404/Vector.svg" alt="" /> </div>           
             
            </button> 
            
              
              
              </div>
        </div>

      </div>
      
    </div>
  );
};

export default PageEror404;
