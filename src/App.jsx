import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from 'react-router-dom';  
import Login from "./login/Login";
import axios from "axios";
import SignUp from "./Sign up/SignUp";
import Contautus from "./Contaut us/Contautus";
 
 
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


     
      <Routes>
       

        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/SignUp" element={ <SignUp/>} />  
        <Route path="/Contautus" element={ <Contautus/>} />  


      </Routes>
      
      {/* <Footer />  */}
    </div>
  );
}

export default App;
