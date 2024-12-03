// src/pages/AvailablePuppies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PuppyCard from '../components/PuppyCard';
import FilterPanel from '../components/FilterPanel';

const AvailablePuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [filters, setFilters] = useState({ gender: '', color: '' });

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/puppies')
      .then((response) => setPuppies(response.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPuppies = puppies.filter(
    (puppy) =>
      (filters.gender === '' || puppy.gender === filters.gender) &&
      (filters.color === '' || puppy.color.toLowerCase().includes(filters.color.toLowerCase()))
  );

  return (
    <div>
      <h1>Available Puppies</h1>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div className="puppies-grid">
        {filteredPuppies.map((puppy) => (
          <PuppyCard key={puppy._id} puppy={puppy} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePuppies;
