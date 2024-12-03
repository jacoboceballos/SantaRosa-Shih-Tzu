// src/components/PuppyCard.js
import React from 'react';

const PuppyCard = ({ puppy }) => {
  return (
    <div className="puppy-card">
      <img src={puppy.image || 'https://via.placeholder.com/150'} alt={puppy.name} />
      <h2>{puppy.name}</h2>
      <p>Gender: {puppy.gender}</p>
      <p>Color: {puppy.color}</p>
      <p>Status: {puppy.status}</p>
    </div>
  );
};

export default PuppyCard;
