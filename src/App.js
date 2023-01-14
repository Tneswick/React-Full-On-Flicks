import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Body from './components/Body';
// import Header from './components/Header'

function App() {

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  // const [data, setData] = useState(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText)
    setInputText('')
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`);
  //     setData(response.data);
  //   }
  //   fetchData();
  //   console.log(data)
  // },[searchTerm])

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
      {/* <div className='body-wrapper'>
        <h1>{data ? data.results.title : 'Searching'}</h1>
        <p>{data ? data.results.description : 'Please standby'}</p>
      </div> */}
    </div>
  );
}

export default App;
