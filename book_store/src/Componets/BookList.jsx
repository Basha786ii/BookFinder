import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/booklist.css'
function BookList({ books }) {
  const navigate = useNavigate();

  const handleMoreClick = (book) => {
    localStorage.setItem('searchQuery', book.title);
    navigate('/book-details', { state: { book } });
  };

  return (
    <div className="book">
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div className="book-item" key={book.key}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p><strong>Published Year:</strong> {book.first_publish_year || 'Unknown'}</p>
            <button onClick={() => handleMoreClick(book)}>More</button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
