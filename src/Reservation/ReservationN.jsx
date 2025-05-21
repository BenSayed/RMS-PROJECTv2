import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationN.css';
import imgReservation1 from './Rectangle 1162 (2).svg';

function Reservation() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
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

  const isAlreadyBooked = (date, time) => {
    // دمج التاريخ والوقت وتحويلهم لـ ISO
    const timeWithSeconds = time.length === 5 ? time + ":00" : time;
    const selectedDateTime = new Date(`${date}T${timeWithSeconds}`).toISOString();
    return previousBookings.includes(selectedDateTime);
  };

  const handleConfirmClick = async () => {
    const baseUrl = localStorage.getItem('baseUrl');
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

    if (!userInfo.token) {
      alert("انت غير مسجل الدخول");
      return;
    }

    if (!date) {
      alert("من فضلك اختر التاريخ");
      return;
    }

    if (!time) {
      alert("من فضلك اختر الوقت");
      return;
    }

    // نضيف الثواني لو مش موجودة
    const timeWithSeconds = time.length === 5 ? time + ":00" : time;

    if (isAlreadyBooked(date, time)) {
      alert("المعاد ده اتحجز قبل كده!");
      return;
    }

    const customerId = userInfo.id;
    const tableId = "a8fb267c-4e3d-4183-a1bc-dee8af1dc1f2"; // ثابت مؤقتًا
    const transactionId = crypto.randomUUID(); // معرف معاملة عشوائي
    const duration = "01:00:00"; // مدة الحجز ساعة بصيغة HH:mm:ss

    const bookingDateTime = new Date(`${date}T${timeWithSeconds}`).toISOString();

    const requestData = {
      date: bookingDateTime,
      time: timeWithSeconds,
      duration: duration,
      guestCount: parseInt(guests, 10),
      transactionId: transactionId,
      customerId: customerId,
      tableId: tableId
    };

    try {
      await axios.post(`${baseUrl}/api/Booking/CreateBooking`, requestData, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      alert("تم الحجز بنجاح!");
      setPreviousBookings(prev => [...prev, bookingDateTime]);
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
          <form className="reservation-form" onSubmit={e => e.preventDefault()}>
            <input
              className='reservation-forminput'
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
              required
            />
            <input
              className='reservation-forminput'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="" disabled>Number of Guests</option>
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
