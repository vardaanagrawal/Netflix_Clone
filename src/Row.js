import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import { Link } from "react-router-dom";

export default function Row({ title, genre }) {
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
    <div className="roww">
      <div>
        <h2 style={{ color: "whitesmoke", marginLeft: "30px" }}>{title}</h2>
      </div>
      <div className="rowwdiv">
        {movies.map((name) => (
          <Link to={{ pathname: `/trailer`, state: { movie: name } }}>
            <img
              src={`${baseURL}${name.backdrop_path}`}
              alt="img"
              className="card"
            />
            <div style={{textDecoration: 'none',color: 'white'}}><center>{name.title}{name.name}</center></div>
          </Link>
        ))}
      </div>  
    </div>
  );
}
