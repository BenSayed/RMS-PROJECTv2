import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";

// صفحات عامة
import Home from "./Home/Home";
import AboutPage from "./About/About";
import SignUp from "./Sign up/SignUp";
import Login from "./login/Login";
import Contautus from "./Contaut us/Contautus";
import MenuItems from "./MenuPages/MenuItems1/MenuItems";
import SalesPages from "./pageSales1/SalesPages";
import MainCourses from "./MenuPages/MainCoourses/MainCourses";
import Reservation from "./Reservation/ReservationN";
import WatingPage from "./Wating Page/WatingPage";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import EmailConfirmation from "./ConfirmEmail/ConfirmEmail";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import MenuItem from "./MenuPages/MenuItem/MenuItem";

// صفحات الملف الشخصي (محمية)
import HomeProfile from "./UserProfile/Componant/HomeProfile";
import OrderFavProfile from "./UserProfile/Componant/OrderFavProfile";
import HistoryProfile from "./UserProfile/Componant/HistoryProfile";
import AccountSettings from "./UserProfile/Componant/AccountSettings";

// صفحات الشيف
import CheefuiPage from "./chiefUiPage/CheefuiPage";

// صفحات الدليفري
import DeliveryHome from "./Delivery pages/Delivery Home/DeliveryHome";
import DeliveryHistory from "./Delivery pages/DeliveryHistory/DeliveryHistory";
import DeliveryMap from "./Delivery pages/DeliveryMap/DeliveryMap";
import DeliveryProfile from "./Delivery pages/DeliveryProfile/DeliveryProfile";
import DeliverypageDeteils from "./Delivery pages/DeliverypageDeteils/DeliverypageDeteils";

// صفحات الويتر
import WaiterDashboard from "./WaiterPage/Waiter";

// عناصر ثابتة
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Cart from "./MiniCart/MiniCart";
import HeaderMobilee from "./component/HeaderMobile/HeaderMobilee";

// صفحات خطأ
import PageEror404 from "./Page Erorr/page404/PageEror404";
import PageErorr500 from "./Page Erorr/Page500/pageErorr500";

// ✅ عنصر لحماية الصفحات حسب الدور
function RequireRole({ role, children }) {
  const storedUser = localStorage.getItem("userInfo");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(storedUser);
  const roles = (user.roles || []).map((r) => r.toLowerCase());

  // دعم أكثر من دور
  const allowedRoles = Array.isArray(role) ? role.map(r => r.toLowerCase()) : [role.toLowerCase()];
  const hasAccess = roles.some((r) => allowedRoles.includes(r));

  if (!hasAccess) {
    return <Navigate to="/page404" replace />;
  }

  return children;
}

function App() {
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsedUser.token}`;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deliveryPaths = [
    "/DeliveryHome",
    "/DeliveryHistory",
    "/DeliveryMap",
    "/DeliveryProfile",
    "/DeliverypageDeteils",
  ];

  const isDeliveryPage = deliveryPaths.includes(location.pathname);
  const isChefPage = location.pathname === "/CheefuiPage";

  return (
    <div className="allapp">
      {!isChefPage && (isDeliveryPage ? <HeaderMobilee /> : <Header />)}

      <Routes>
        {/* صفحات عامة مفتوحة للجميع */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contautus" element={<Contautus />} />
        <Route path="/MenuItems" element={<MenuItems />} />
        <Route path="/MainCourses" element={<MainCourses />} />
        <Route path="/SalesPages" element={<SalesPages />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/WatingPage" element={<WatingPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/EmailConfirmation" element={<EmailConfirmation />} />
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
        <Route path="/MenuItem/:id" element={<MenuItem />} />

        {/* صفحات الملف الشخصي (كاستومر + ادمن) */}
        <Route
          path="/HomeProfile"
          element={
            <RequireRole role={["customer", "admin"]}>
              <HomeProfile />
            </RequireRole>
          }
        />
        <Route
          path="/OrderFavProfile"
          element={
            <RequireRole role={["customer", "admin"]}>
              <OrderFavProfile />
            </RequireRole>
          }
        />
        <Route
          path="/HistoryProfile"
          element={
            <RequireRole role={["customer", "admin"]}>
              <HistoryProfile />
            </RequireRole>
          }
        />
        <Route
          path="/AccountSettings"
          element={
            <RequireRole role={["customer", "admin"]}>
              <AccountSettings />
            </RequireRole>
          }
        />

        {/* صفحات الشيف */}
        <Route
          path="/CheefuiPage"
          element={
            <RequireRole role="chef">
              <CheefuiPage />
            </RequireRole>
          }
        />

        {/* صفحات الدليفري */}
        <Route
          path="/DeliveryHome"
          element={
            <RequireRole role="delivery">
              <DeliveryHome />
            </RequireRole>
          }
        />
        <Route
          path="/DeliveryHistory"
          element={
            <RequireRole role="delivery">
              <DeliveryHistory />
            </RequireRole>
          }
        />
        <Route
          path="/DeliveryMap"
          element={
            <RequireRole role="delivery">
              <DeliveryMap />
            </RequireRole>
          }
        />
        <Route
          path="/DeliveryProfile"
          element={
            <RequireRole role="delivery">
              <DeliveryProfile />
            </RequireRole>
          }
        />
        <Route
          path="/DeliverypageDeteils"
          element={
            <RequireRole role="delivery">
              <DeliverypageDeteils />
            </RequireRole>
          }
        />

        {/* صفحات الويتر */}
        <Route
          path="/WaiterDashboard"
          element={
            <RequireRole role="waiter">
              <WaiterDashboard />
            </RequireRole>
          }
        />

        {/* صفحات الخطأ */}
        <Route path="/page404" element={<PageEror404 />} />
        <Route path="/page500" element={<PageErorr500 />} />
      </Routes>

      {/* ✅ الكارت يظهر فقط على الأجهزة الكبيرة، وليس للشيف أو الدليفري */}
      {!isDeliveryPage && !isChefPage && !isMobile && <Cart />}
      {!isChefPage && <Footer />}
    </div>
  );
}

export default App;
