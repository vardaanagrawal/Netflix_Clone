import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export default function Trailer(props) {
  const detail = useLocation();
  const { movie } = detail.state;
  const [trailerURL,setTrailerURL] = useState([]);
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  movieTrailer(movie?.title || movie?.name || "")
  .then((url) => {
    const urlparams = new URLSearchParams(new URL(url).search);
    setTrailerURL(urlparams.get('v'));
  })
  console.log(movie)

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          paddingTop: '70px',
        }}
      >
        <div className="row" style={{display: 'flex',alignItems: 'center'}}>
          
          <div >{trailerURL && <YouTube videoId={trailerURL} opts={opts}  />}</div>
          <div style={{color: 'white'}}><h1>{movie.title}{movie.name}</h1>{movie.overview}</div>
        </div>

        


      </div>
    </div>
  );
}
