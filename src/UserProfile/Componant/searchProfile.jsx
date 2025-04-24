import React from 'react';
import { BellIcon } from "lucide-react";

import "./HomeProfile.css";

const SearchProfile = () => {
  return (
    <div>
        <div className="search-barProfile">
          <input className="search-input" placeholder="Search..." />
          <div className="search-icon">
            <BellIcon />
          </div>
        </div>
    </div>
  );
}

export default SearchProfile;
