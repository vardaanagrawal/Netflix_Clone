import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Row from "./Row";
import requests from "./requests";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Banner genre={requests.trending} />
      <Trending genre={requests.action} />
      <Row title="Comedy Movies" genre={requests.comedy} />
      <Row title="Drama Shows" genre={requests.tvdrama} />
      <Row title="Horror Movies" genre={requests.horror} />
      <Row title="Comedy Shows" genre={requests.tvcomedy} />
      <Row title="Romance Movies" genre={requests.romance} />
      <Row title="Action Shows" genre={requests.tvaction} />
      <Row title="Drama Movies" genre={requests.drama} />
    </div>
  );
}
