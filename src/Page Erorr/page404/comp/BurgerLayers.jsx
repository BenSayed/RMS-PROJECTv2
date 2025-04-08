import React, { useEffect, useState } from "react";
import "./styles.css";

const Burger404 = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const burgerParts = [
    { name: "top-bun", src: "src/Page Erorr/page404/comp/Group-13.svg", x: -10, y: -120 },
    { name: "cucumber1", src: "src/Page Erorr/page404/comp/Group (2).svg", x: -30, y: -95 },
    { name: "cucumber2", src: "src/Page Erorr/page404/comp/Group (3).svg" , x: 30, y: -95},
    { name: "cucumber3", src: "src/Page Erorr/page404/comp/Group (4).svg" , x: -20, y: -95},
    { name: "cucumber4", src: "src/Page Erorr/page404/comp/Group (2).svg" , x: 20, y: -95 },
    { name: "tomato1", src: "src/Page Erorr/page404/comp/Group (5).svg" , x: -25, y: -85},
    { name: "tomato2", src: "src/Page Erorr/page404/comp/Group (6).svg", x: 25, y: -80  },
    { name: "tomato3", src: "src/Page Erorr/page404/comp/Group (7).svg" , x: 0, y: -80},
    { name: "patty", src: "src/Page Erorr/page404/comp/Group (9).svg", x: -10, y: -85  },
    { name: "onion", src: "src/Page Erorr/page404/comp/Group (10).svg", x: 10, y: -55  },
    { name: "cheese", src: "src/Page Erorr/page404/comp/Group (11).svg", x: -10, y: -45  },
    { name: "lettuce", src: "src/Page Erorr/page404/comp/Group (13).svg" , x: 10, y: -5},
    { name: "bottom-bun", src: "src/Page Erorr/page404/comp/Group (14).svg" }
  ];

  return (
    <div className="container_burger">
      <div className={`burger ${isAnimating ? "animate" : ""}`}>
          {burgerParts.map((part, index) => (
            <img 
              key={index} 
              src={part.src} 
              alt={part.name} 
              className={part.name}
              id={part.name} 
              style={{
                transform: isAnimating 
                  ? `translate(${part.x}px, ${part.y}px) rotate(${Math.random() * 20 - 10}deg)`
                  : "translate(0, 0)"
              }}
            />
          ))}
        </div>
    </div>
  );
};

export default Burger404;
