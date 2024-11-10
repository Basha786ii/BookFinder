import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/favourites.css';

function Favourites() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    setFavoriteBooks(storedFavorites);
  }, []);


  const deleteBook = (bookKey) => {
    const updatedFavorites = favoriteBooks.filter((book) => book.key !== bookKey);
    setFavoriteBooks(updatedFavorites);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  };


  const viewBookDetails = (book) => {
    navigate('/book-details', { state: { book } });
  };

  const onClick = () =>{
    navigate("/app");
  }

  return (
    <div className="favorites">
      <h2>Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published Year</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favoriteBooks.map((book, index) => (
              <tr key={book.key}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</td>
                <td>{book.first_publish_year || 'Unknown'}</td>
                <td>
                  <button onClick={() => viewBookDetails(book)} className="view-btn">View</button>
                </td>
                <td>
                <button onClick={() => deleteBook(book.key)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className='btn' onClick={onClick}>Back</button>
    </div>
  );
}

export default Favourites;
