import React, { useState } from 'react';

const GifSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the callback prop with the current value of the text input
    onSearch(query);
  };

  const handleChange = (e) => {
    // Update the component state with the current value of the text input
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Giphy Search:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GifSearch;
