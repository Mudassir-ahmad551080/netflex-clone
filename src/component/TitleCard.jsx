import React, { useEffect, useRef, useState } from 'react'
import card_data from '../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'
const TitleCard = ({ title, category }) => {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBiNjBkY2E2ODA5ZGU5YTFmMTFlY2M3NGI5ZmE4ZSIsIm5iZiI6MTc1MjEyMTQ2My4zMDQ5OTk4LCJzdWIiOiI2ODZmNDA3NzQwMjcyOTQ2MTY1MWYwNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bAzcmMYKenpdgnUXgydpJzreem64DBRmv78qclOLbaI'
  }
};

  function handleWheel(event) {
    event.preventDefault();
    cardRef.current.scroolLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    // Adding event listener for wheel event to enable horizontal scrolling
    // on the card container    
    cardRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div>
      <p className='font-bold text-2xl md:mt-10 mb-4 mt-10 text-center mb-0'>{title ? title : "Popular On Netflex"}</p>
      <div id='anotherdiv' className='flex gap-4 overflow-scroll' ref={cardRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='md:ml-3 ml-3' key={index}>
            <img className='rounded-md relative  mt-10 md:mt-0 cursor-pointer ' src={` http://image.tmdb.org/t/p/w185` + card.backdrop_path} alt="" />
            <p className='text-sm border border-1 w-40 mt-3 p-2 '>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard