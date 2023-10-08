import React from 'react';

function Book({ book, onBookClick }) {
  return (
    <div className="book" onClick={() => onBookClick(book)}>
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
    </div>
  );
}

export default Book;
