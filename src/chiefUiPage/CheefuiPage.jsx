import "./CheefuiPage.css";
import React, { useState, useEffect } from 'react';

// مكون لعرض الوقت الحالي
const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // تحديث الوقت كل ثانية

    return () => clearInterval(timer); // تنظيف المؤقت عند إلغاء التثبيت
  }, []);

  return <h3 className="currentTime1">{currentTime}</h3>;
};

// مكون رئيسي
const CheefuiPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSelect, setShowSelect] = useState(false); // الحالة الجديدة للتحكم في العرض

  // وظيفة لتغيير الحالة عند النقر على الزر
  const handleButtonClick = () => {
    setShowSelect(!showSelect); // عكس حالة الـ select عند النقر على الزر
  };

  const newOrdersData = [
    {
      id: 1,
      image: "src/chiefUiPage/Rectangle 1153 (1).svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (3).svg",
    },
    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153 (2).svg",
      title: "fd54es",
      items: 1,
      icon: "src/chiefUiPage/ic_baseline-delivery-dining.svg",
    },
    {
      id: 3,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 8,
      icon: "src/chiefUiPage/Vector (3).svg",
    },
    {
      id: 4,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 8,
      icon: "src/chiefUiPage/Vector (3).svg",
    },
 
  ];


  const inProgressData = [
    {
      id: 1,
      image: "src/chiefUiPage/Rectangle 1153 (1).svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (4).svg",
    },

    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 7,
      icon: "src/chiefUiPage/Vector (5).svg",
    },
    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 7,
      icon: "src/chiefUiPage/Vector (5).svg",
    },
    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 7,
      icon: "src/chiefUiPage/Vector (5).svg",
    },
    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 7,
      icon: "src/chiefUiPage/Vector (5).svg",
    },

  ];

  const readyToServeData = [
    {
      id: 1,
      image: "src/chiefUiPage/Rectangle 1153 (1).svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (6).svg",
    },
    {
      id: 2,
      image: "src/chiefUiPage/Rectangle 1153 (2).svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/ic_baseline-delivery-dining (1).svg",
    },
    {
      id: 3,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (6).svg",
    },
    {
      id: 3,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (6).svg",
    },
    {
      id: 3,
      image: "src/chiefUiPage/Rectangle 1153.svg",
      title: "fd54es",
      items: 4,
      icon: "src/chiefUiPage/Vector (6).svg",
    },
  ];

  return (
    <div className="CheefuiPage">
      <div className="CheefuiPageContint">
        <div className="CheefuiPageContintHeader  ">
          <div className="CheefuiPageContintHeaderLogo  ">
            <img src="src/chiefUiPage/Logo Header.svg" alt="Logo" />
          </div>
          <div className="CheefuiPageContintHeaderTimer  ">
            <TimeDisplay /> {/* عرض الوقت */}
          </div>
        </div>
        <div className="CheefuiPageContintHearobutton  ">
          <div className="buttonchifpage">
            <button className="button1chifpage" onClick={handleButtonClick}>
              <img src="src/chiefUiPage/Vector (2).svg" alt="Button Icon" />
            </button>
            {/* عرض الـ select بناءً على حالة showSelect */}
            {showSelect && (
              <>
                <select
                  className="chifSelectpage"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="" disabled>
                    Order Type
                  </option>
                  <option className="optionselect" value="option1">
                    In Restaurant
                  </option>
                  <option className="optionselect" value="option2">
                    Delivery
                  </option>
                </select>
                <select
                  className="chifSelectpage"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="" disabled>
                    Dish Type
                  </option>
                  <option className="optionselect" value="option1">
                    Dessert
                  </option>
                  <option className="optionselect" value="option2">
                    Appetizers
                  </option>
                  <option className="optionselect" value="option3">
                    Main
                  </option>
                </select>
              </>
            )}
          </div>
        </div>
        <div className="CheefuiPageContintCared  ">
          
          <div className="NewOrders  ">
            
            {/* New Orders */}
          <div className="chifNewOrders">
            <div className="chifNewOrdersText">
              <h2>New Orders</h2>
            </div>
            <div className="chifNewOrderscardsContainer">
              {newOrdersData.map((card) => (
                <div key={card.id} className="cardallchifuipageprosser">
                  <div className="cardchifuipageprosser">
                    <div className="cardchifuipageprosserImg">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="cardchifuipageprosserTextt">
                      <h3>{card.title}</h3>
                      <p>{card.items} items</p>
                    </div>
                    <div className="cardchifuipageprosserIcon">
                      <img src={card.icon} alt="Icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
             </div>
          <div className="NewOrderslines"> </div>


          <div className="InProgress  ">
            
  {/* In Progress */}
          <div className="chifInProgress">
            <div className="chifInProgressText">
              <h2>In Progress</h2>
            </div>
            <div className="chifNewOrderscardsContainer">
              {inProgressData.map((card) => (
                <div key={card.id} className="cardchifuipageprosser">
                  <div className="cardchifuipageprosserImg">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="cardchifuipageprosserTextt">
                    <h3>{card.title}</h3>
                    <p>{card.items} items</p>
                  </div>
                  <div className="cardchifuipageprosserIcon">
                    <img src={card.icon} alt="Icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          </div>
          <div className="InProgresslines"> </div>
          <div className="ReadytoServe  "> 
{/* Ready to Serve */}
<div className="chifReadytoServe">
            <div className="chifReadytoServeText">
              <h2>Ready to Serve</h2>
            </div>
            <div className="chifNewOrderscardsContainer">
              {readyToServeData.map((card) => (
                <div key={card.id} className="cardchifuipageprosser">
                  <div className="cardchifuipageprosserImg">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="cardchifuipageprosserTextt">
                    <h3>{card.title}</h3>
                    <p>{card.items} items</p>
                  </div>
                  <div className="cardchifuipageprosserIcon">
                    <img src={card.icon} alt="Icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>


                        
             </div>
           </div>

      </div>
    </div>
  );
};

export default CheefuiPage;
