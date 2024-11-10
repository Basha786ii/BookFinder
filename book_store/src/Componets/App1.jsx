import React, { useState, useEffect } from 'react';
import BookList from './BookList'; // Assuming BookList displays the books
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/app.css'

const App1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchBooks(searchQuery);
    }
  };

  const fetchBooks = (query) => {
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs || []);
      })
      .catch((error) => console.error('Error fetching books:', error));
  };

  useEffect(() => {
    const storedSearchQuery = localStorage.getItem('searchQuery');
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
      fetchBooks(storedSearchQuery);
    }
  }, []);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setBooks([]);
    localStorage.removeItem('searchQuery');
  };

  return (
    <div className="app1">
      <h2>Search for Books</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleQueryChange}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>
          Clear
        </button>
      </form>

      {/* Display books if available */}
      {books.length > 0 && <BookList books={books} />}
    </div>
  );
};

export default App1;
