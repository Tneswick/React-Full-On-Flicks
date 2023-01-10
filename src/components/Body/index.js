import React, { useState, useEffect } from 'react';

function Body () {

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

  const [data, setData] = useState([]);
  useEffect(() => {
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
  
  return (
    <div className="body-wrapper">
      {/* {relevantData} */}
    </div>
  )
}

export default Body;
