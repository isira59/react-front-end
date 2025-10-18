import React from "react";
import "../styles/Store.css";
import sale1 from "../images/sale1.jpg";
import sale2 from "../images/sale2.jpg";
import sale3 from "../images/sale3.jpg";

const products = [
  { id: 1, name: "Rottweiler", price: "RS 13000", img: sale1 },
  { id: 2, name: "Golden Retriever", price: "RS 15000", img: sale2 },
  { id: 3, name: "Bulldog", price: "RS 12000", img: sale3 },
];

const Store = () => {
  return (
    <div className="store-page">
      <h1>Pet Store</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
