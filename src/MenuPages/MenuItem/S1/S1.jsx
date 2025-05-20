import React, { useState } from 'react';
import './S1.css';

const images = [
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
  'src/MenuPages/MenuItem/S1/Rectangle 11523.svg',
 
   
  
 
 
];

export default function  S1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // "left" or "right"
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300); // لازم تساوي مدة الانميشن بالـ CSS
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeSlide(nextIndex, 'right');
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(prevIndex, 'left');
  };

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={goToPrevious}><img src="src\MenuPages\MenuItem\S1\Vector.svg" alt="" />
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        className={`slider-image ${isAnimating ? (direction === 'right' ? 'slide-right' : 'slide-left') : ''}`}
      />

      <button className="nav-button right" onClick={goToNext}><img src="src\MenuPages\MenuItem\S1\Vector (1).svg" alt="" /></button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              const dir = index > currentIndex ? 'right' : 'left';
              changeSlide(index, dir);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
