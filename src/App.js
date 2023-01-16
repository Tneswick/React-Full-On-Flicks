import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Body from './components/Body';

function App() {

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText)
    console.log(inputText)
    setInputText('')
  };

  // SAVE UNTIL INFINITE LOOP STOPS

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`);
  //     setData(response.data);
  //     console.log(data)
  //   }
  //   fetchData();
  // },[searchTerm])

  useEffect(() => {
    if (searchTerm) {
      console.log('starting fetch with -> ', `https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`)
      fetch(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`)
      .then(res => {
          console.log('json data')
          return res.json()
        })
      .then(json => {
          setData(json)
          console.log('setting data to this value', json)
        })
      .then(console.log('current data value after setData runs -> ', data))
    }
  }, [searchTerm])

  // experimental conditional body render
  const handleBody = () => {
    if (data !== null) {
      return (
        <Body data={data} />
      )
    }
    return
  }

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
      {handleBody()}
      <div className='body-wrapper'>

      </div>
    </div>
  );
}

export default App;
