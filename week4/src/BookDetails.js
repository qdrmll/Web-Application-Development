import React from 'react';

function BookDetails({ match }) {
  const { id } = match.params;


  return (
    <div>
      <h2>Детали книги</h2>
      <p>ID книги: {id}</p>
    </div>
  );
}

export default BookDetails;
