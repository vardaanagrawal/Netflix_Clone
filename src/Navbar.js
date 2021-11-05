import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div id="navdiv" className={`nav ${show && "nav__black"}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt=""
            id="netflix_logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "red" }}
          >
            <span className="">Browse</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  className="link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies" className="link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv" className="link">
                  TV Shows
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              id="netflix_avatar"
            ></img>
          </div>
        </div>
      </nav>
    </div>
  );
}
