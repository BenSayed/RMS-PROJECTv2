import React, { useEffect } from "react";
import "./DeliverypageDeteils.css";

const DeliverypageDeteils = () => {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  //     script.async = true;
  //     script.onload = () => {
  //       window.initMap = initMap;
  //     };
  //     document.head.appendChild(script);
  //   }, []);

  //   const initMap = () => {
  //     const map = new window.google.maps.Map(document.getElementById("map"), {
  //       center: { lat: 27.177070, lng: 31.205017 },
  //       zoom: 10,
  //       styles: [
  //         {
  //           "elementType": "geometry",
  //           "stylers": [
  //             {
  //               "color": "#212121",
  //             },
  //           ],
  //         },
  //         {
  //           "elementType": "labels.icon",
  //           "stylers": [
  //             {
  //               "visibility": "off",
  //             },
  //           ],
  //         },
  //         {
  //           "elementType": "labels.text.fill",
  //           "stylers": [
  //             {
  //               "color": "#757575",
  //             },
  //           ],
  //         },
  //         {
  //           "elementType": "labels.text.stroke",
  //           "stylers": [
  //             {
  //               "color": "#212121",
  //             },
  //           ],
  //         },
  //         {
  //           "featureType": "administrative",
  //           "elementType": "geometry",
  //           "stylers": [
  //             {
  //               "color": "#757575",
  //             },
  //           ],
  //         },
  //         {
  //           "featureType": "landscape",
  //           "elementType": "geometry",
  //           "stylers": [
  //             {
  //               "color": "#212121",
  //             },
  //           ],
  //         },
  //         // إضافة المزيد من الأنماط هنا حسب الحاجة
  //       ],
  //     });
  //   };

  return (
    <div className="DeliverypageDeteils">
      <div className="DeliverypageDeteilscard">
        <div className="DeliverypageDeteilsD1">
          <div className="DeliverypageDeteilsD1Img">
            <img
              src="src/Delivery pages/DeliverypageDeteils/Rectangle 1191 (4).svg"
              alt="error"
            />
          </div>
          <div className="DeliverypageDeteilsD1text">
            <h2>Mohamed Ali</h2>
            <p>Assiut, City, street 24</p>
            <h4>01049842189</h4>
          </div>
          <div className="DeliverypageDeteilsD1imicon">
            <img
              src="src/Delivery pages/DeliverypageDeteils/Vector (9).svg"
              alt=""
            />
          </div>
        </div>
        <img
          src="src/Delivery pages/DeliverypageDeteils/Line 59.svg"
          alt=""
        />

        <div className="DeliverypageDeteilsD2Invoice">
          <h1>Invoice</h1>
          <div className="DeliverypageDeteilsD2InvoiceText">
            <div className="DeliverypageDeteilsD2InvoiceTextMeal">
              <h3>Meal</h3>
              <div className="DeliverypageDeteilsD2InvoiceTextMealtext">
                <h2>Wagyu Steak</h2>
                <h2>Wagyu Steak</h2>
                <h2>Wagyu Steak</h2>
              </div>
            </div>

            <div className="DeliverypageDeteilsD2InvoiceTextPace">
              <h3>Pace</h3>
              <div className="DeliverypageDeteilsD2InvoiceTextPacetext">
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
              </div>
            </div>
            <div className="DeliverypageDeteilsD2InvoiceTextPrice">
              <h3>Price</h3>
              <div className="DeliverypageDeteilsD2InvoiceTextPricetext">
                <h2>90$</h2>
                <h2>100$</h2>
                <h2>120$</h2>
              </div>
            </div>
          </div>
          <div className="DeliverypageDeteilsD2Invoice2Text">
            <div className="DeliverypageDeteilsD2InvoiceTextPricetextordr">
              <h3>Order</h3>
              <h3>Taxes</h3>
              <h3>Delivery fees</h3>
            </div>

            <div className="DeliverypageDeteilsD2InvoiceTextPricetextordrprise">
              <h3>130$</h3>
              <h3>0.7$</h3>
              <h3>1.5$</h3>
            </div>
          </div>
          <div className="DeliverypageDeteilsD2InvoiceTextPricetexttotel">
            <h2>Total</h2>
            <h2>132.20$</h2>
          </div>
          <div className="DeliverypageDeteilsD2InvoiceTextPricetextEsttime">
            <h3>Estimated delivery time:</h3>
            <h3>15 - 30 min</h3>
          </div>
          </div>

        <img className="linedrevry"
        
          src="src/page-index/Delivery pages/DeliverypageDeteils/Line 59.svg"
          alt=""
        />

        <div className="DeliverypageDeteilsD3Notis">
          <h2>Notes</h2>
          <p>
            Wagyu Steak Wagyu Steak Wagyu Steak Wagyu Steak Wagyu Steak Wagyu
            Steak Wagyu Steak Wagyu Steak Wagyu Steak .
          </p>
        </div>
        <img
          src="src/page-index/Delivery pages/DeliverypageDeteils/Line 59.svg"
          alt=""
        />

        <div className="DeliverypageDeteilsD4Notis">
          <h2>Notes</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28394.71453102395!2d31.205017747244057!3d27.177070223427663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450be607cb7bcd%3A0xba699162bfc01112!2z2KPYs9mK2YjYt9iMINin2YTYrdmF2LHYp9ihINin2YTYq9in2YbZitip2Iwg2KfZhNmB2KrYrdiMINmF2K3Yp9mB2LjYqSDYo9iz2YrZiNi3!5e0!3m2!1sar!2seg!4v1740235575136!5m2!1sar!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <img
          src="src/page-index/Delivery pages/DeliverypageDeteils/Line 59.svg"
          alt=""
        />

     
        <div className="DeliverypageDeteilsD5buttone">
          <button className="DeliverypageDeteilsD5buttone1">
            Start Ordering
          </button>
          <button className="DeliverypageDeteilsD5buttone2">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default DeliverypageDeteils;
