// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li><a href="/">Главная страница</a></li>
          <li><a href="/read">Что прочитать</a></li>
          <li><a href="/genres">Жанры</a></li>
          <li><a href="/authors">Авторы</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
