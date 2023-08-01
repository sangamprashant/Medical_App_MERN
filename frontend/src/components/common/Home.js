import React from "react";
import Hero from "./Hero";
import "../css/Hero.css"
import Offer from "./Offer";
import Banner from "./Banner";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Hero/>
      <Offer/>
      <Banner/>
      <Product title="capsule"/>
      <Product title="injection"/>

    </div>
  );
}

export default Home;
