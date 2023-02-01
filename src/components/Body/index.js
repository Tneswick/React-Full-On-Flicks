import React, { useState, useEffect } from 'react';

// imdb GET https://imdb-api.com/en/API/Title/k_ix11kdvq/tt0795421
// watchmode GET https://api.watchmode.com/v1/title/tt0795421/sources/?apiKey=XtDVqWrPdNevd0HMRCFzh8nSvnBpjdpVoazNV42f

function Body({data, watchmode}) {

  const fiveActors = data.actorList.slice(0,5);

  const handleActorLink = (actor) => {
    return 'https://www.imdb.com/name/' + actor;
  }
  
  const handleDateFormat = (date) => {
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const year = date.slice(0,4);
    return `${month}/${day}/${year}`
  }

  const filterWatchmode = (/*watchmode*/) => {
    const majorStreams = ['Netflix', 'Hulu', 'Amazon Prime', 'AppleTV+', 'HBO MAX', 'Disney+', 'Paramount+', 'Showtime', 'Crave', 'Peacock', 'Peacock Premium', 'Crave Plus', 'STARZ', 'Crackle', 'Tubi TV', 'Youtube Premium', 'Crunchyroll Premium', 'Plex']
    const nameFilteredArr = watchmode.filter(o => majorStreams.includes(o.name))
    const finalFilteredArr = nameFilteredArr.filter(o => o.type === 'sub' || o.type === 'free')
    return watchmode.filter(o => {
      if(o.type === 'sub') {
        return <a href={o.web_url} target='_blank' rel='noreferrer' className='stream-btn' key={o}>{o.name}</a>
      } else {
        return <div className='no-stream'>This title is not currently available on the major streaming platforms (Netflix, Hulu, Amazon Prime Video, Apple TV+, Disney+, HBO MAX</div>
      }
    })
  }
  
  return (
    <div className="body-wrapper">
      <h1>{data.fullTitle} ({data.contentRating})</h1>
      <a href={data.image} target='_blank' rel='noreferrer'>
        <img src={data.image} className='img' alt='Movie or TV Poster'/>
      </a>
      <div className='description'>
        <p>{data.plot}</p>
      </div>
      <div className='info'>
        <p>{handleDateFormat(data.releaseDate)} | {data.runtimeMins}mins | {data.ratings.rottenTomatoes}% on Rotten Tomatoes</p>
        {/* Possibly insert a revealable info dropdown with data.boxOffice.budget and us grossing and worldwide grossing, along with more ratings from various websites */}
      </div>
      <div className='cast-wrapper'>
        <h3 className='cast-header'>Cast</h3>
        <ul className='cast-list-el'>
          {fiveActors.map(i => (
            <li key={i}>
              <a href={handleActorLink(i.id)} className='actor-img'>
                <img alt='Actor portriat' src={i.image}/>
              </a>
              <a target='_blank' rel='noreferrer' href={handleActorLink(i.id)}>
                {i.name}
              </a> as {i.asCharacter}</li>
          ))}
        </ul>
      </div>
      <div className='watchmode-wrapper'>

        <textarea className='textarea' value={watchmode}></textarea>
      </div>
      {/* Possibly Insert a lower section with 'similar' titles from data.similars */}
    </div>
  )
}

export default Body;
