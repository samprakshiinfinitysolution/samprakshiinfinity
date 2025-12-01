import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import {BASE_URL} from "../../constants/urls" 
function ProductCard({ product,categories }) {
  const truncateDescription = (desc, wordLimit) => {
    const words = desc.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : desc;
  };
  const categoryName = categories.find(category => category._id === product.category)?.name || "Uncategorized";

  // Prepending base URL to the image path
  const imageUrl = `${BASE_URL}${product.image[0]}`;
console.log(imageUrl);
  return (
    <div className="product-card">
      <div className="product-tumb">
        {/* Ensure image URL is correct */}
        <img src={imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <span className="product-category">{categoryName|| "Uncategorized"}</span>
        <h4>
          <Link to={`/product/${product._id}`}>{truncateDescription(product.name, 10)}</Link>
        </h4>
        <p>{truncateDescription(product.description, 10)}</p>
        <div className="product-bottom-details">
          <div className="product-price">{product.price}₹</div>
          <div className="product-links">
            <a href="#">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
