import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import { Link } from "react-router-dom";

export default function Trending({ genre }) {
  const [movies, setMovies] = useState([]);
  const baseURL = `https://image.tmdb.org/t/p/w500`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(genre);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [genre]);
  return (
    <div className="trow">
      <div>
        <h2 style={{ color: "whitesmoke", marginLeft: "30px" }}>
          Now Trending
        </h2>
      </div>
      <div className="trowdiv">
        {movies.map((name) => (
          <Link to={{ pathname: `/trailer`, state: { movie: name } }}>
            <img
              src={`${baseURL}${name.poster_path}`}
              alt="img"
              className="card"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
