import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from 'react-router-dom';  
import Login from "./login/Login";
import axios from "axios";
 
 
const api = axios.create({
  baseURL: 'http://flavorhaven.runasp.net/api/User/Login', // استبدلها بالرابط الصحيح
  headers: {
    'Content-Type': 'application/json',
  },
});


function App() {
  return (

    <div className="allapp"  >

  
      <Header />  
 
     
      <Routes>
       

        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/login" element={<Login/>} />  

      </Routes>
      
      {/* <Footer />  */}
    </div>
  );
}

export default App;
