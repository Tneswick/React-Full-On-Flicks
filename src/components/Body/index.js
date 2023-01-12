import React, { useState, useEffect } from 'react';

function Body({ term }) {

  const [data, setData] = useState([]);
  // const relevantData = () => {
  //   if (true) {
  //     return (
  //       <h2 className="spash-message">
  //         ^ ^ Use The Search Bar Above To Search ^ ^
  //       </h2>
  //     )
  //   }
  //   return (
  //     <h2 className="">
  //       Sample Data
  //     </h2>
  //   )
  // }
  
  const Data = (url) => {
    useEffect(() => {
      // inject search term and get our api data
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
  }

  // take the search term, fetch the imdb data, store it into a variable, utilize the imdb id for 2nd api
  if (term) {
    const url = 'https://imdb-api.com/en/API/SearchTitle/k_ix11kdvq/' + term;
    Data(url)
  }


  return (
    <div className="body-wrapper">
      <h1 className='tested'>{data.results.title}</h1>
      <p>
        {data.results.description}
      </p>
    </div>
  )
}

export default Body;
