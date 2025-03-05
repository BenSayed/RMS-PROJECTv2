import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About";
import { Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <div className="allapp"  >
      <Header />  
      
      <Routes>
       
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutPage />} />  
      </Routes>
      
      {/* <Footer />  */}
    </div>
  );
}

export default App;
