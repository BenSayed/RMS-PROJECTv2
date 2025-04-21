import React from 'react';
import './HomeProfile.css';
import { Link } from 'react-router-dom';
import logo from '../assest/Logo 1.svg' ;
import user from '../assest/Group 34537.svg';
import EditButton from './EditButton.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import Vector from '../assest/Vector.svg';
import fa6SolidUser from '../assest/fa6-solid_user.svg';
import flowbiteEditOutline from '../assest/material-symbols_history-rounded.svg';
import materialSymbolsSettingsRounded from '../assest/material-symbols_settings-rounded.svg';
import solarHeartBold from '../assest/solar_heart-bold.svg';
import solarStarBold from '../assest/material-symbols_star-rate-rounded.svg';
import { BellIcon } from 'lucide-react';
 const HomeProfile = () => {
  return (
    <div className="dashboardProfil">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">



        <div className="logo-containerProfile">
            <img className="logo-containerProfileimg"  src={logo} alt="Flavor Haven Logo" width="48px"  height="48px" />
            <h2 className="logo-text">Flavor Haven</h2>
        </div>
        </div>

        
<div className="nav-links ">
  <Link to="/general" className="nav-item active">
    <img src={fa6SolidUser} width="24" height="24" alt="User Icon" />
    <span>General</span>
  </Link>
  <Link to="/history" className="nav-item">
    <img src={flowbiteEditOutline} width="24" height="24" alt="History Icon" />
    <span>History</span>
  </Link>
  <Link to="/settings" className="nav-item">
    <img src={materialSymbolsSettingsRounded} width="24" height="24" alt="Settings Icon" />
    <span>Account settings</span>
  </Link>
  <Link to="/rating" className="nav-item">
    <img src={solarStarBold} width="24" height="24" alt="Rating Icon" />
    <span>Rating</span>
  </Link>
  <Link to="/favorite" className="nav-item">
    <img src={solarHeartBold} width="24" height="24" alt="Favorite Icon" />
    <span>Favorite</span>
  </Link>
</div>

        <div className="logout">
        <img src={Vector} width="24" height="24" alt="Favorite Icon" />  
         <span>Logout</span> 
          
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="search-barProfile">
          <input className="search-input" placeholder="Search..." />
          
<div className="search-icon">
  <BellIcon />
</div>
        </div>

        <div className="hello-section">
          <img src={user} alt="User Avatar" />
          <h3>Hello,<br className='brhello' /> <strong>Mohamed Ali</strong></h3>
        </div>

        {/* User Info */}
        <div className="user-info">
          <div className="section-header">
            <h3>User information</h3>
            <EditButton text="Edit" onClick={() => console.log('Edit clicked')} />
          </div>
          <div className="info-grid">
          <div className="info-grid">
  <div className="info-item item-first">
    <div className="info-label">First Name:</div>
    <div className="info-value">Mohamed</div>
  </div>
  <div className="info-item item-last">
    <div className="info-label">Last Name:</div>
    <div className="info-value">Ali</div>
  </div>
  <div className="info-item item-birth">
    <div className="info-label">Birth of date:</div>
    <div className="info-value">12/10/1996</div>
  </div>
  <div className="info-item item-email">
    <div className="info-label">Email Address:</div>
    <div className="info-value">moali99@gmail.com</div>
  </div>
  <div className="info-item item-phone">
    <div className="info-label">Phone Number:</div>
    <div className="info-value">20+ 105-749-724</div>
  </div>
</div>

</div>

        </div>

        {/* Addresses */}


        <div className='user-info2'> 
         <div className="user-info">
          <div className="section-header">
            <h3>Addresses</h3>
            <PrimaryButton text="Add" onClick={() => console.log('Add clicked')} />
          </div>
          <table className="address-table">
            <thead >
              <tr>
                <th>No.</th>
                <th>Country</th>
                <th>City</th>
                <th>Postal Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Egypt</td>
                <td>Assiut, city</td>
                <td>ERT 1572</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Egypt</td>
                <td>Assiut, city</td>
                <td>ERT 1572</td>
              </tr>
            </tbody>
          </table>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
