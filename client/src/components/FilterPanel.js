// src/components/FilterPanel.js
import React from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-panel">
      <label>
        Gender:
        <select name="gender" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          placeholder="Search by color"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default FilterPanel;
