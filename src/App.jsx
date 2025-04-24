import Home from "./Home/Home";
 


import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import axios from "axios";
import SignUp from "./Sign up/SignUp";
import Contautus from "./Contaut us/Contautus";
import MenuItems from "./MenuPages/MenuItems1/MenuItems";
import SalesPages from "./pageSales1/SalesPages";
import ComHeader from "./component/Header/ComHeader";
import OrderPage from "./chiefUiPage/alertChief/alert";
import CheefuiPage from "./chiefUiPage/CheefuiPage.jsx";
import DeliveryLogin from "./Delivery pages/DeliveryLogin";
import DeliveryHome from "./Delivery pages/Delivery Home/DeliveryHome";
import DeliveryHistory from "./Delivery pages/DeliveryHistory/DeliveryHistory";
import DeliverypageDeteils from "./Delivery pages/DeliverypageDeteils/DeliverypageDeteils";
import ComHeaderMobile from "./component/HeaderMobile/ComHeaderMobile";
import HeaderMobilee from "./component/HeaderMobile/HeaderMobilee";
import MainCourses from "./MenuPages/MainCoourses/MainCourses";
import Reservation from "./Reservation/ReservationN";
import Footer from "./component/Footer/Footer";
import PageEror404 from "./Page Erorr/page404/PageEror404";
import PageErorr500 from "./Page Erorr/Page500/pageErorr500";
import DeliveryProfile from "./Delivery pages/DeliveryProfile/DeliveryProfile";
import WatingPage from "./Wating Page/WatingPage";
import OrderPageProssesing from "./chiefUiPage/alertChief - Prosessing/alertProsessing";
import HeaderMobileUser from "./component/HeaderMobile/HeaderMobileUser/HeaderMobileUser";
import FavoritePage from "./UserProfile/Componant/FavoritePage";
import RatingPage from "./UserProfile/Componant/RatingPage";
import SettingsPage from "./UserProfile/Componant/SettingsPage";
 import Home2 from "./UserProfile/Componant/HomeProfile";
import HomeProfile from "./UserProfile/Componant/HomeProfile";
import HistoryPage from "./UserProfile/Componant/HistoryPage";
import OrderFavProfile from "./UserProfile/Componant/OrderFavProfile";
 
function App() {
  return (
    <div className="allapp">

   
 

       {/* <PageEror404/> */}
       {/* <PageErorr500/> */}

       {/* <OrderPageProssesing/> */}
      
       {/* <Routes>
        <Route path="/" element={<CheefuiPage/>} />
       </Routes> */}


 
      {/* <HeaderMobilee/> */}



       {/* <Routes>
        <Route path="/" element={<DeliveryHome/>} />
        <Route path="/DeliveryLogin" element={ <DeliveryLogin/>} />
        <Route path="/DeliveryHistory" element={ <DeliveryHistory/>} />
        <Route path="/DeliverypageDeteils" element={ <DeliverypageDeteils/>} />
        <Route path="/DeliveryProfile" element={ <DeliveryProfile/>} />

      </Routes> */}

 {/* <HeaderMobileUser/> */}
 {/* <HomeProfile/> */}
 {/* <HistoryPage /> */}

 


 
{/*  
      <Routes>
 
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes> */}
 

         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contautus" element={<Contautus />} />
        <Route path="/MenuItems" element={<MenuItems />} />
        <Route path="/MainCourses" element={<MainCourses />} />
        <Route path="/SalesPages" element={<SalesPages />} />
        <Route path="/DeliverypageDeteils" element={<DeliverypageDeteils />} />
        <Route path="/DeliveryHome" element={<DeliveryHome />} />
        <Route path="/DeliveryHistory" element={<DeliveryHistory />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/WatingPage" element={<WatingPage/>} />
        <Route path="/HomeProfile" element={<HomeProfile/>} />
        <Route path="/OrderFavProfile" element={<OrderFavProfile/>} />
        

      </Routes> 
 
      <Footer />  
      {/* <WatingPage/> */}
    </div>
  );
}

export default App;
