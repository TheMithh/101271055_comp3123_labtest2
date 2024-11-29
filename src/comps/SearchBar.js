import React from 'react';

const SearchBar = ({ city, onCityChange, onSearch, suggestions, onSelectCity }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => onCityChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => onSelectCity(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
