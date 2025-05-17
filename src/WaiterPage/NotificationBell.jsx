// NotificationBell.jsx
import React, { useState, useRef, useEffect } from 'react';
import './NotificationBell.css';

const notifications = [
  {
    id: 1,
    name: 'Michael Roberts',
    avatar: 'src/WaiterPage/Avatar.svg',
    text: 'Reservations have begun for table number 4',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar4.svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (1).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (2).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (2).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (2).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (2).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  {
    id: 2,
    name: 'Wade Warren',
    avatar: 'src/WaiterPage/Avatar (2).svg',
    text: 'Reservations for table number 7 have ended',
    time: '08:56 PM on 31 October, 2024',
    unread: true
  },
  // ... باقي النوتيفكيشنز
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close panel لما نعمل click برة
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notification-wrapper" ref={ref}>
      <div
        className="notification-bell"
        onClick={() => setOpen(o => !o)}
      >
        <img src="src\WaiterPage\Group.svg" alt="bell" />
        {/* النقطة الصفراء */}
        <span className="unread-dot-bell"></span>
      </div>

      {open && (
        <div className="notification-panel">
          <h4 className="panel-title">Notifications</h4>
          <div className="panel-body">
            {notifications.map(n => (
              <div key={n.id} className="notification-item">
                <div className="avatar-wrapper">
                  <img className="avatar" src={n.avatar} alt={n.name} />
                  {n.unread && <span className="unread-dot"></span>}
                </div>
                <div className="content">
                  <strong>{n.name}</strong>
                  <p className="text">{n.text}</p>
                  <small className="time">{n.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
