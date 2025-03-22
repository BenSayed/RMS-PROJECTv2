import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import axios from "axios";
import SignUp from "./Sign up/SignUp";
import Contautus from "./Contaut us/Contautus";
import MenuItems from "./MenuPages/MenuItems1/MenuItems";
import MenuExpor from "./MenuPages/MenuExpor/MenuExpor";
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
 // const api = axios.create({
//   baseURL: 'http://flavorhaven.runasp.net/api/User/Login', // استبدلها بالرابط الصحيح
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

function App() {
  return (
    <div className="allapp">
      {/* <Header /> */}
 <HeaderMobilee/>
      {/* <CheefuiPage/> */}
      {/* <OrderPage /> */}
      {/* <ComHeader /> */}
      {/* <MenuExpor/> */}

      {/* <MenuItem/> */}
      {/* <DeliveryLogin/> */}
      {/* <DeliveryHome/> */}
      {/* <DeliveryHistory /> */}
      {/* <DeliverypageDeteils /> */}
{/* 
      <Home />  */}
      
      <Routes>
       

        <Route path="/" element={  <DeliveryHome />   } />       {/* <DeliveryLogin/> */}        {/* <DeliveryHome/> */}
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/SignUp" element={ <SignUp/>} />  
        <Route path="/Contautus" element={ <Contautus/>} />  
        <Route path="/MenuItems" element={ <MenuItems/>} />  
        <Route path="/MenuExpor" element={ <MenuExpor/>} />  
        <Route path="/SalesPages" element={ <SalesPages/>} />  
        <Route path="/DeliverypageDeteils" element={ <DeliverypageDeteils/>} />
        <Route path="/DeliveryHome" element={ <DeliveryHome/>} />  
        <Route path="/DeliveryHistory" element={ <DeliveryHistory/>} />

      </Routes>  

      {/* <Footer />  */}
    </div>
  );
}

export default App;
