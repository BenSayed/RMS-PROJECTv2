import { Link } from 'react-router-dom';
import logo from '../assest/Logo 1.svg';
import Vector from '../assest/Vector.svg';
import fa6SolidUser from '../assest/fa6-solid_user.svg';
import flowbiteEditOutline from '../assest/material-symbols_history-rounded.svg';
import materialSymbolsSettingsRounded from '../assest/material-symbols_settings-rounded.svg';
import solarHeartBold from '../assest/solar_heart-bold.svg';
import solarStarBold from '../assest/material-symbols_star-rate-rounded.svg';
import '../Componant/History.css';
function FavoritePage() {
  return (
    <div className="page-container"> {/* لازم نلف كل حاجة في عنصر واحد */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Flavor Haven Logo" width="48" height="48" />
          <h2 className="logo-text">Flavor Haven</h2>
        </div>

        <div className="nav-links">
          <Link to="/general" className="nav-item">
            <img src={fa6SolidUser} width="24" height="24" alt="User Icon" />
            <span>General</span>
          </Link>
          <Link to="/history" className="nav-item ">
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
          <Link to="/favorite" className="nav-item active">
            <img src={solarHeartBold} width="24" height="24" alt="Favorite Icon" />
            <span>Favorite</span>
          </Link>
        </div>

        <div className="logout">
          <img src={Vector} width="24" height="24" alt="Logout Icon" />
          <span>Logout</span>
        </div>
      </div>
      <div className="search-bar">
        <input className="search-input" placeholder="Search..." />
        <div className="search-icon">🔔</div>
      </div>
    </div>
    
  );
}

export default FavoritePage;


  