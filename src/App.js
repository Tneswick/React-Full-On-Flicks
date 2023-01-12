import './App.css';
import React, { useState } from 'react';
import Body from './components/Body';
// import Header from './components/Header'

function App() {

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setInputText({ ...inputText, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText)
    setInputText('')
  };

  // conditional render
  const handleBody = () => {
    if (searchTerm === '') {
      return
    }

    return (
      <Body term={searchTerm} />
    )
  }

  const Header = () => {
    return (
      <div className="header-wrapper">
        <h1 className="header-text">
          🎞️🍿Full On Flicks🎬🎥
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" className="search" value={inputText} onChange={handleChange} placeholder="Search for Movies or TV Shows" />
          <input type="submit" className="search-btn" />
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Header /> */}
      {Header}
      {handleBody}
    </div>
  );
}

export default App;
