import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Row from "./Row";
import requests from "./requests";
export default function Movies() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Banner genre={requests.trending} />
      <Trending genre={requests.action} />
      <Row title="Comedy Movies" genre={requests.comedy} />
      <Row title="Horror Movies" genre={requests.horror} />
      <Row title="Romance Movies" genre={requests.romance} />
      <Row title="Drama Movies" genre={requests.drama} />
    </div>
  );
}
