import React from "react";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>{'Your Gadget'}</title>
        </Helmet>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
