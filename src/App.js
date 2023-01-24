import './App.css';
import React, { useEffect, useState } from 'react';
import Body from './components/Body';

function App() {

  const apiWatchmode = "XtDVqWrPdNevd0HMRCFzh8nSvnBpjdpVoazNV42f"

  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [titleData, setTitleData] = useState(null);
  const [data, setData] = useState(null);
  const [watchmode, setWatchmode] = useState(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText)
    console.log(inputText)
    setInputText('')
  };

  // use searchTerm to find title id
  useEffect(() => {
    if (searchTerm) {
      fetch(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${searchTerm}`)
      .then(res => {
          return res.json()
        })
      .then(json => {
          setTitleData(json.results[0].id);
        })
    }
  }, [searchTerm])

  // use title id to populate data array
  useEffect(() => {
    if (titleData) {
      fetch(`https://imdb-api.com/en/API/Title/k_ix11kdvq/${titleData}/FullCast,Posters,Ratings`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        setData(json)
      })
    }
  }, [titleData])

  // use title id to populate watchmode array
  useEffect(() => {
    if (data) {
      fetch(`https://api.watchmode.com/v1/title/${titleData}/sources/?apiKey=${apiWatchmode}`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        setWatchmode(json)
        console.log('incoming watchmode data', watchmode)
      })
    }
  }, [data])

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
