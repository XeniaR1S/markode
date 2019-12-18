import React from 'react';
import Main from './components/Main';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>
      <Main/>
    </div>
  );
}

export default App;
