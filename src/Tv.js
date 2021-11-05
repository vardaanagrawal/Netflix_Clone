import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Row from "./Row";
import requests from "./requests";

export default function Tv() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Banner genre={requests.trending} />
      <Trending genre={requests.action} />
      <Row title="Drama Shows" genre={requests.tvdrama} />
      <Row title="Comedy Shows" genre={requests.tvcomedy} />
      <Row title="Action Shows" genre={requests.tvaction} />
      <Row title="Action Shows" genre={requests.tvanimation} />
    </div>
  );
}
