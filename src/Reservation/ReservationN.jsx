import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationN.css';
import imgReservation1 from './Rectangle 1162 (2).svg';

function Reservation() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [branch, setBranch] = useState('');
  const [guests, setGuests] = useState('2');

  // حجوزات سابقة (تقدر تيجي من API بعدين)
  const [previousBookings, setPreviousBookings] = useState([
    "2025-03-29T13:16:17.073Z",
    "2025-03-30T15:00:00.000Z"
  ]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setDate(formattedDate);
  }, []);

  // فانكشن بتتحقق لو المعاد اتحجز قبل كده
  const isAlreadyBooked = (date, time) => {
    const selectedDateTime = new Date(`${date}T${time}`).toISOString();
    return previousBookings.includes(selectedDateTime);
  };

  const handleConfirmClick = async () => {
    const bookingTime = new Date(`${date}T${time}`).toISOString();

    if (isAlreadyBooked(date, time)) {
      alert("المعاد ده اتحجز قبل كده!");
      return;
    }

    const requestData = {
      tableId: "a8fb267c-4e3d-4183-a1bc-dee8af1dc1f2",
      customerId: "a95d2ee4-54d0-411c-7cc9-08dd6d626407",
      bookingTime: bookingTime,
    };

    try {
      await axios.post("http://flavorhaven.runasp.net/api/tables/BookTable", requestData);
      alert("تم الحجز بنجاح!");
      // بعد الحجز الناجح بنضيف المعاد عشان ميتحجزش تاني
      setPreviousBookings(prev => [...prev, bookingTime]);
    } catch (error) {
      console.error("خطأ أثناء الحجز:", error);
      alert("حصلت مشكلة أثناء الحجز.");
    }
  };

  return (
    <div className='reservation'>
      <div className="reservation-container">
        <div className='reservation-container-form'>
          <div className="reservation-title">Reservation</div>
          <div className="reservation-image">
            <img src={imgReservation1} alt="Restaurant Interior" />
          </div>
          <form className="reservation-form">
            <input
              className='reservation-forminput'
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
            />
            <input
              className='reservation-forminput'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option>Branch</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburbia">Suburbia</option>
            </select>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option>Number of Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </form>
        </div>
        <div className="confirm-button">
          <button type="button" onClick={handleConfirmClick}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;