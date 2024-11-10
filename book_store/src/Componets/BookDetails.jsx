import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/Styles/bookdetails.css';

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};
  const [description, setDescription] = useState(null);

  if (!book) {
    navigate('/');
    return null;
  }

  useEffect(() => {
    const fetchBookDescription = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org${book.key}.json`);
        setDescription(response.data.description || "No description available.");
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDescription();
  }, [book.key]);

  const addToFavorites = () => {
    const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    const bookExists = favoriteBooks.find((item) => item.key === book.key);

    if (!bookExists) {
      favoriteBooks.push({ ...book, description });
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
      alert("Book added to favorites!");
    } else {
      alert("Book is already in favorites.");
    }
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p><strong>Published Year:</strong> {book.first_publish_year || 'Unknown'}</p>
      <p><strong>Edition Count:</strong> {book.edition_count || 'N/A'}</p>
      <p><strong>Number of Pages:</strong> {book.number_of_pages_median || 'N/A'}</p>
      <p><strong>Language:</strong> {book.language ? book.language.join(', ') : 'N/A'}</p>
      <p><strong>Description:</strong> {description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default BookDetails;
