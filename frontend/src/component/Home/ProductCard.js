import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    value: 4,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/products/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">(256 reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>

    // <Link className="productCard" to={product._id}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <ReactStars {...options} />{" "}
    //     <span className="productCardSpan">(256 revies)</span>
    //   </div>
    //   <span>{product.price}</span>
    // </Link>
  );
};

export default ProductCard;
