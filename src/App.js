import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Body from './components/Body';

function App() {

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [titleData, setTitleData] = useState(null);
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

  useEffect(() => {
    if (searchTerm) {
      console.log('starting fetch with -> ', `https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`)
      fetch(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`)
      .then(res => {
          console.log('json data')
          return res.json()
        })
      .then(json => {
          setTitleData(json.results[0].id);
          console.log('setting data to this value', json.results[0].id)
        })
    }
  }, [searchTerm])

  useEffect(() => {
    if (titleData) {
      console.log('fetch title data with id > ', `https://imdb-api.com/en/API/Title/k_ix11kdvq/${titleData}/FullCast,Posters,Ratings`)
      fetch(`https://imdb-api.com/en/API/Title/k_ix11kdvq/${titleData}/FullCast,Posters,Ratings`)
      .then(res => {
        console.log('json full data')
        return res.json()
      })
      .then(json => {
        setData(json)
        console.log('movie data into data variable', json);
      })
    }
  })

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
      {/* <div className='body-wrapper'>

      </div> */}
    </div>
  );
}

export default App;
