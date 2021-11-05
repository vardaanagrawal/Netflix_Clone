import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import { Link } from "react-router-dom";

export default function Banner({ genre }) {
  const [movie, setMovie] = useState([]);
  const [bp, setBp] = useState([]);
  const [title, setTitle] = useState([]);
  const [overview, setOverview] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(genre);
      const res =
        req.data.results[
          Math.floor(Math.random() * (req.data.results.length - 1))
        ];
      setMovie(res);
      setTitle(res.title);
      setOverview(res.overview);
      setBp(res.backdrop_path);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${bp})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        padding: "50px",
      }}
    >
      <div>
        <div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bolder",
            color: "whitesmoke",
          }}
          id="title"
        >
          {title}
        </div>

        <div>
          <Link to={{ pathname: `/trailer`, state: { movie: movie } }}>
            <button id="play" style={{borderRadius: '4px', marginTop: '5px', marginRight: '5px'}}>PLAY</button>
          </Link>
          <button>+WACTHLIST</button>
        </div>
      </div>
      </div>
    </div>
  );
}
