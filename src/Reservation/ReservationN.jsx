import React, { useState } from 'react';
import "./ReservationN.css";
import imgReservation1 from './Rectangle 1162 (2).svg' ;

function Reservation() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [branch, setBranch] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ time, date, branch, guests });
    // يمكن إضافة منطق إرسال البيانات إلى الخادم هنا
  };

  return (


  <div className='reservation'> 
    <div className="reservation-container">
    <div className='reservation-container-form'>
        <div className="reservation-title">Reservation</div>
        <div className="reservation-image">
          <img src={imgReservation1} alt="Restaurant Interior" />
        </div>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option style={{color : '#009C4E80'}} className='reservation-form-option'>Time</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
          </select>
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            <option>Date</option>
            <option value="2023-10-01">October 1, 2023</option>
            <option value="2023-10-02">October 2, 2023</option>
          </select>
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option>Branch</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburbia">Suburbia</option>
          </select>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option>Number of Guests</option>
            <option value="2">2 Guests</option>
            <option value="4">4 Guests</option>
          </select>
      
        </form>
    </div>

      <div className="confirm-button">
          <button type="submit">Confirm</button>
        </div>

     </div>
    </div>
  );
}

export default Reservation;
