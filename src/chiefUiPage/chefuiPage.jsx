import React, { useState, useEffect } from "react";
import "./chefuiPage.css";

const ChefuiPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSelect, setShowSelect] = useState(false); // الحالة الجديدة للتحكم في العرض

  const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString()
    );

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000); // تحديث الوقت كل ثانية

      return () => clearInterval(timer); // تنظيف المؤقت عند إلغاء التثبيت
    }, []);

    return <h3 className="currentTime">{currentTime}</h3>;
  };

  // بيانات البطاقات لكل قسم
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
  ];

  // وظيفة لتغيير الحالة عند النقر على الزر
  const handleButtonClick = () => {
    setShowSelect(!showSelect); // عكس حالة الـ select عند النقر على الزر
  };

  return (
    <div>
      <section className="chifuipage">
        <div className="Headerchif">
          <img src="src/chiefUiPage/Logo Header.svg" alt="Logo" />
          <TimeDisplay /> {/* عرض الوقت */}
        </div>
        <div className="buttonchifpage">
          <button className="button1chifpage" onClick={handleButtonClick}>
            <img
              src="src/chiefUiPage/Vector (2).svg"
              alt="Button Icon"
            />
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

        <div className="chifuipageprosser">
          {/* New Orders */}
          <div className="chifNewOrders">
            <div className="chifNewOrdersText">
              <h3>New Orders</h3>
            </div>
            <div className="cardsContainer">
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

          <div>
            <img
              className="imgchipborder"
              src="src/chiefUiPage/Line 56.svg"
              alt="Border Line"
            />
          </div>

          {/* In Progress */}
          <div className="chifInProgress">
            <div className="chifInProgressText">
              <h2>In Progress</h2>
            </div>
            <div className="cardsContainer">
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

          <img
            className="imgchipborder0"
            src="src/chiefUiPage/Line 56.svg"
            alt="Border Line"
          />

          {/* Ready to Serve */}
          <div className="chifReadytoServe">
            <div className="chifReadytoServeText">
              <h3>Ready to Serve</h3>
            </div>
            <div className="cardsContainer">
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
      </section>
    </div>
  );
};

export default ChefuiPage;
