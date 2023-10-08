// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="auth-buttons">
        <button>Войти</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Поиск..." />
        <button>Поиск</button>
      </div>
    </header>
  );
}

export default Header;
