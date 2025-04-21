import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      <span className="button-text">{text}</span>
      <span className="button-icon">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="#FFF4E6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    </button>
  );
};

export default PrimaryButton;