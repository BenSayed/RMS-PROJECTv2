import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Extras.css';

function ExtraCard({ extra }) {
  return (
    <div className="extra-card">
      <img src={extra.imagePath} alt={extra.name} className="extra-img" />
      <div className="extra-info">
        <h4>{extra.name}</h4>
        <p>{extra.price}$</p>
      </div>
    </div>
  );
}

export default function Extras({ menuItemId }) {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const baseUrl = localStorage.getItem('baseUrl');
        const res = await axios.get(`${baseUrl}/api/Menu/GetExtrasOfMenuItem/${menuItemId}`);
        setExtras(res.data);
      } catch (error) {
        console.error('Error fetching extras:', error);
      }
    };
    fetchExtras();
  }, [menuItemId]);

  return (
    <section className="extras-section">
      <h2>Extras</h2>
      <div className="extras-list">
        {extras.length > 0 ? (
          extras.map((extra) => <ExtraCard key={extra.id} extra={extra} />)
        ) : (
          <p>No extras available.</p>
        )}
      </div>
    </section>
  );
}
