import './App.css';
import React, { useState } from 'react';
import Body from './components/Body';
// import Header from './components/Header'

function App() {

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText)
    setInputText('')
  };

  return (
    <div className="App">
      <div className="header-wrapper centered">
        <h1 className="header-text">
          🎞️🍿Full On Flicks🎬🎥
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" className="search" value={inputText} onChange={handleChange} placeholder="Search for Movies or TV Shows" />
          <button type="submit" className="search-btn">Submit</button>
        </form>
      </div>
      <Body term={searchTerm} />
    </div>
  );
}

export default App;
