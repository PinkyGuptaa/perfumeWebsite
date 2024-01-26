import React from 'react';
import "./Service.css";
import Product from "./Product";
import { productData } from "./data";

const LimitedEditionSection = () => {
  const cards = productData.slice(0, 3).map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="LimitedEditionSection">
      <h2>Featured Products</h2>
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
};

export default LimitedEditionSection;
