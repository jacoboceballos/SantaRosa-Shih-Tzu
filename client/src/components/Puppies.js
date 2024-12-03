import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Puppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/puppies') // Ensure this matches your backend port
      .then((response) => {
        setPuppies(response.data);
      })
      .catch((err) => {
        console.error('Error fetching puppies:', err);
        setError(true);
      });
  }, []);

  if (error) {
    return <p>There was an error loading the puppies. Please try again later.</p>;
  }

  return (
    <div>
      <h1>Available Puppies</h1>
      {puppies.length > 0 ? (
        puppies.map((puppy) => (
          <div key={puppy._id}>
            <h2>{puppy.name}</h2>
            <p>Gender: {puppy.gender}</p>
            <p>Color: {puppy.color}</p>
          </div>
        ))
      ) : (
        <p>No puppies available right now!</p>
      )}
    </div>
  );
};

export default Puppies;
