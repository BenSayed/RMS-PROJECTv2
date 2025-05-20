import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './S4.css';

function SuggestionCard({ item }) {
  return (
    <div className="box7">
      <img src={item.imageUrl} alt={item.name} className="img91" />
      <div className="txt99">
        <h3>{item.name}</h3>
        <p>{item.descritpion || item.description || 'No description'}</p>
        <div className="line55">
          <span className="star77">{'★'.repeat(Math.round(item.totalRating || 0))}</span>
          <span className="price44">{item.price}$</span>
        </div>
      </div>
    </div>
  );
}

export default function Suggestions({ menuItemId }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const baseUrl = localStorage.getItem('baseUrl');
        const res = await axios.get(`${baseUrl}/api/Menu/${menuItemId}/suggestions`);
        setSuggestions(res.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, [menuItemId]);

  return (
    <section className="wrap88">
      <h2 className="head33">Combo Options</h2>
      <div className="grid22">
        {suggestions.length > 0 ? (
          suggestions.map((item) => <SuggestionCard key={item.id} item={item} />)
        ) : (
          <p>No suggestions available.</p>
        )}
      </div>
    </section>
  );
}
