import React from "react";
import { Card } from "../../components/blog";
import { Category } from "../../components/category";

const Home = () => {
  return (
    <div>
      <Category />
      <Card />
    </div>
  );
};

export default Home;
