// App.js
import React from 'react';
import Header from './Header'; 
import Sidebar from './Sidebar'; 
import MainContent from './MainContent'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

