import React, { useState } from 'react';
import Book from './Book';
import book1Image from './img/book1.jpg'; 
import book2Image from './img/book2.jpg'; 
import book3Image from './img/book3.jpg'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import BookDetails from './BookDetails'; 
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Убить пересмешника',
      image: book1Image, 
      description: 'Харпер Ли',
    },
    {
      id: 2,
      title: 'Над пропастью во ржи',
      image: book2Image,
      description: 'Джером Дэвид Сэлинджер',
    },
    {
      id: 3,
      title: 'Цветы для Элджернона',
      image: book3Image,
      description: 'Дэниел Киз',
    },
  ]);

  const navigate = useNavigate();
 

  return (
    <Router>
      <main>
        <h2>Популярные книги</h2>
        <div className="book-list">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </main>
      <Route path="/book/:id" component={BookDetails} />
    </Router>
  );
}

export default MainContent;
