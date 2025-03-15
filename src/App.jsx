import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from 'react-router-dom';  
import Login from "./login/Login";
import axios from "axios";
import SignUp from "./Sign up/SignUp";
import Contautus from "./Contaut us/Contautus";
import MenuItems from "./MenuPages/MenuItems1/MenuItems";
import MenuExpor from "./MenuPages/MenuExpor/MenuExpor";
import SalesPages from "./pageSales1/SalesPages";
 
 
// const api = axios.create({
//   baseURL: 'http://flavorhaven.runasp.net/api/User/Login', // استبدلها بالرابط الصحيح
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


function App() {
  return (

    <div className="allapp"  >

  
      <Header />  
<SalesPages/>
 
      {/* <MenuExpor/> */}
       {/* <Routes>
       

        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/SignUp" element={ <SignUp/>} />  
        <Route path="/Contautus" element={ <Contautus/>} />  
        <Route path="/MenuItems" element={ <MenuItems/>} />  
        <Route path="/MenuExpor" element={ <MenuExpor/>} />  




      </Routes>   */}
      
      {/* <Footer />  */}
    </div>
  );
}

export default App;
