import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  
  
  const handleSearch = (query) => {
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        
        setGifs(data.data.slice(0, 3));
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
    
      <GifSearch onSearch={handleSearch} />

      
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
