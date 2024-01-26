import React from "react";
import "./Service.css";
import Product from "./Product";
import { productData } from "./data";

export default function LimitedEdition() {
  const selectedProducts = productData.slice(0, 3); // Selecting the first three products
  const products = selectedProducts.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="LimitedEdition">
      <h2>HAPPILY AT YOUR SERVICE</h2>
      <div className="product-container">
        {products}
      </div>
    </div>
  );
}
