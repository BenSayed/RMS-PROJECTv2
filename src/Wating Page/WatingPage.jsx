import React, { useState, useEffect } from 'react';
import './WatingPage.css';
import heroImage from './Frame3.svg';

const WatingPage = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(1081); // 18 دقيقة و1 ثانية

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeInSeconds(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // تحويل الثواني لصيغة hh:mm:ss
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="container">
      <div className="timer-container">{formatTime(timeInSeconds)}</div>

      <div className="image-container">
        <img src={heroImage} alt="صورة الطاهي" />
      </div>

      <div className="text-container">
        <p>We’re Cooking up something <br /> delicious just for you!</p>
      </div>

      <div className="progress-bar hoverable">
        <div className="dot-wrapper">
          <div className="dot active"></div>
          <span className="step active">Ordered</span>
        </div>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <span className="step">Cooking</span>
        </div>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <span className="step">Last touch</span>
        </div>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <span className="step">Done</span>
        </div>
        <div className="progress-line"></div>
      </div>
    </div>
  );
};

export default WatingPage;
