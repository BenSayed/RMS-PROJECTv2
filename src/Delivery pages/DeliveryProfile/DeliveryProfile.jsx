 

import React from "react";
import imgeprof1 from "./Vector (2).svg";

import imgeprof2 from "./Vector 223.svg";

import "./DeliveryProfile.css";

const DeliveryProfile = () => {
  return (
    // الحاوية الرئيسية للبروفايل
    <div className="profile-container">

      {/* الهيدر */}
      <div className="head">
        {/* صورة البروفايل */}
        <img
          src="src/Delivery pages/DeliverypageDeteils/Rectangle 1191 (4).svg"
          alt="Profile"
          className="profile-img"
        />

        {/* معلومات البروفايل */}
        <div className="profile-info">
          {/* اسم المستخدم */}
          <h2 className="profile-name">Ahmed Mahmoud</h2>
          {/* رقم الهاتف */}
          <p className="profile-phone">01561685174</p>
        </div>
      </div>

      {/* الخط الفاصل */}
      <div className="linee"></div>

      {/* عنوان قسم الإحصائيات */}
      <div className="statistics-title">
        <h4>Statistics</h4>
        {/* السهم الجانبي */}
        <img
          className="mo"
          src="src/page-index/DileviryPage/DeliveryProfile/Vector 223.svg"
          alt=""
        />
      </div>

      {/* الحاوية اللي فيها الكروت */}
      <div className="ccards-container">
        {/* كارت الإيرادات الشهرية */}
        <div className="ccard">
          <h4 className="ccard-title">Monthly revenue</h4>
          <div className="ccard-content">
            <span className="ccard-value">5485.5</span> {/* القيمة */}
            <span className="ccard-icon">$</span> {/* رمز العملة */}
          </div>
          <button className="butto">Show all</button> {/* زر التفاصيل */}
        </div>

        {/* كارت الطلبات المكتملة */}
        <div className="ccard">
          <h4 className="ccard-title">Complete Orders</h4>
          <div className="ccard-contet">
            <span className="orders-badge">52</span> {/* عدد الطلبات */}
          </div>
          <button className="butto">Show all</button> {/* زر التفاصيل */}
        </div>

        {/* كارت الطلبات الملغاة */}
        <div className="ccard">
          <h4 className="ccard-title">Canseled Orders</h4>
          <div className="ccard-contt">
            <span className="orders-badg">3</span> {/* عدد الطلبات */}
          </div>
          <button className="butto">Show all</button> {/* زر التفاصيل */}
        </div>
      </div>

      {/* قسم تغيير كلمة المرور */}
      <div className="change-password-container">
        <div className="change-password-header">
          <h3>Change Password</h3> {/* عنوان تغيير الباسورد */}
          <span className="arrow-icon"> <img src={imgeprof2} alt="" /> </span> {/* أيقونة السهم */}
        </div>

         <div className="password-fields">
          {/* المدخل الأول */}
          <div className="profilepassword-input">
            <input type="password" placeholder="Old password" />
            <span className="profileeye-icon"><img src={imgeprof1} alt="" /></span> {/* أيقونة إظهار الباسورد */}
          </div>
          {/* المدخل الثاني */}
          <div className="profilepassword-input">
            <input type="profilepassword" placeholder="Old password" />
            <span className="profileeye-icon"><img src={imgeprof1} alt="" /></span> {/* أيقونة إظهار الباسورد */}
          </div>
          {/* المدخل الثالث */}
          <div className="profilepassword-input">
            <input type="profilepassword" placeholder="Old password" />
            <span className="profileeye-icon"><img src={imgeprof1} alt="" /></span> {/* أيقونة إظهار الباسورد */}
          </div>
        </div>

        {/* زر الحفظ */}
        <button className="save-button">Save</button>
        <hr className="divider" /> {/* خط فاصل */}
        {/* زر تسجيل الخروج */}
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default DeliveryProfile;
