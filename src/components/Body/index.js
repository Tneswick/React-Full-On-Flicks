import React, { useState, useEffect } from 'react';

function Body({data}) {

  if (!data) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="body-wrapper">
      <h1>{data.results.title}</h1>
      <p>{data.results.description}</p>
    </div>
  )
}

export default Body;
