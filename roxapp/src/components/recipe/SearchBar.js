import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Пошук рецептів..."
    />
  );
}

export default SearchBar;