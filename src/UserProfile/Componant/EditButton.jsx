import React from 'react';
import './EditButton.css';

const EditButton = ({text, onClick }) => {
  return (
    <button className="edit-button" onClick={onClick}>
        <span className="button-text">{text}</span>
        <span className="button-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.3333 2.00001C11.5084 1.82495 11.7163 1.686 11.945 1.59112C12.1737 1.49624 12.4188 1.44727 12.6667 1.44727C12.9146 1.44727 13.1597 1.49624 13.3884 1.59112C13.6171 1.686 13.825 1.82495 14 2.00001C14.1751 2.17507 14.314 2.38297 14.4089 2.61168C14.5038 2.84039 14.5527 3.0855 14.5527 3.33334C14.5527 3.58119 14.5038 3.8263 14.4089 4.05501C14.314 4.28372 14.1751 4.49162 14 4.66668L4.66667 14L1.33334 14.6667L2 11.3333L11.3333 2.00001Z" 
              stroke="#FFF4E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </span>
    </button>
  );
};

export default EditButton;