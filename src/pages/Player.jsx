import React, { useEffect } from 'react';
import back_arrow_icon from '../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navgate = useNavigate();
  const { id } = useParams();
  // id is the movie ID, you can use it to fetch specific video data if needed
  const [apiData, setApiData] = React.useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBiNjBkY2E2ODA5ZGU5YTFmMTFlY2M3NGI5ZmE4ZSIsIm5iZiI6MTc1MjEyMTQ2My4zMDQ5OTk4LCJzdWIiOiI2ODZmNDA3NzQwMjcyOTQ2MTY1MWYwNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bAzcmMYKenpdgnUXgydpJzreem64DBRmv78qclOLbaI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));

  }, [])

  // This effect is for fetching video data, you can modify it as needed
  // For example, you can fetch the video ID or other details to display in the player  





  return (
    <div id='baner-div' className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-6">

      {/* Back Button */}
      <div className="w-full max-w-4xl mb-4">
        <button className="flex items-center gap-2  text-gray-700 cursor-pointer hover:text-black transition">
          <img onClick={() => navgate(-2)} src={back_arrow_icon} alt="Back" className="w-10 h-10 text-black h-5" />
          <span className="text-sm md:text-base font-medium"></span>
        </button>
      </div>

      {/* Video Player */}
      <div className="w-full max-w-4xl aspect-video mb-3 rounded-md overflow-hidden shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Info Section */}
      <div className="w-full max-w-4xl text-black rounded-md shadow justify-between flex text-white space-y-2 text-sm md:text-base">
        <p><span className="font-semibold">Published At:</span> {apiData.published_at.slice(0, 10)}</p>
        <p><span className="font-semibold">Name:</span> {apiData.name}</p>
        <p><span className="font-semibold">Type:</span> {apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
