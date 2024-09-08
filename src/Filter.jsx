import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-2"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-2"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
