import React, { useState } from 'react';
// import { fetchBooks } from './api';
import '../assets/Styles/search.css';
function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    if (title.trim()) {
      onSearch(title);
      console.log(title);
    }
  };

  return (
    <div className='sea'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search for a book by title"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;