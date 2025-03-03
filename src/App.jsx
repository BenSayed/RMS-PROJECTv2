import Footer from "./component/Footer/Footer";
import Home from "./Home/Home";
import Header from "./component/Header/Header";
import AboutPage from "./About/About"; // استيراد صفحة AboutPage
import { Routes, Route } from 'react-router-dom';  // استيراد Routes و Route من react-router-dom

function App() {
  return (
    <div className="all">
      <Header /> {/* رأس الموقع */}
      
      <Routes>
        {/* تحديد المسارات */}
        <Route path="/" element={<Home />} />  {/* الصفحة الرئيسية */}
        <Route path="/about" element={<AboutPage />} />  {/* صفحة من نحن */}
      </Routes>
      
      <Footer /> {/* الفوتر */}
    </div>
  );
}

export default App;
