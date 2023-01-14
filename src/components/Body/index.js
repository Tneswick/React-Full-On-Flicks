import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Body({ term }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/${term}`);
      setData(response.data);
    }
    fetchData();
    console.log(data)
  }, [term, data]);

  // if (!data) {
  //   return <p>Loading...</p>;
  // }
  
  return (
    <div className="body-wrapper">
      <h1>{data ? data.results.title : 'Searching'}</h1>
      <p>{data ? data.results.description : 'Please standby'}</p>
    </div>
  )
}

export default Body;
