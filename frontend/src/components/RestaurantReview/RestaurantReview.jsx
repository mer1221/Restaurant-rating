// RestaurantReview.js

import React from 'react';
import './RestaurantReview.css';

const RestaurantReview = ({ name, location, menu }) => {
  return (
    <div className="restaurant-review">
      <h2 className="name">{name}</h2>
      <p className="location">{location}</p>
      <h3 className="menu-heading">Menu</h3>
      <ul className="menu-list">
        {menu.map((item) => (
          <li key={item.id} className="menu-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantReview;