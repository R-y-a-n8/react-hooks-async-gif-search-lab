import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null); 
  const handleSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGifs(data.data.slice(0, 3));
        setError(null); 
      })
      .catch(error => {
        setError('Error fetching data. Please try again.'); 
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      {error && <p>{error}</p>} 
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;

