import React from 'react'

// api.js
export const fetchBooks = async (title) => {
    const response = await fetch("https://openlibrary.org/search.json?title=${title}");
    const data = await response.json();
    return data.docs; // Array of book details
  };
