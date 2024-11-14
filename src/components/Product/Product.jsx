import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price, category, product_id } = product;
  // console.log(product);
  return (
    <div className="p-6 shadow-lg flex flex-col rounded-lg hover:scale-105 transition-all duration-300 border border-[#F3445A]">
      <div className="h-[300px] text-center mx-auto">
        <img className="h-[250px] object-cover" src={product_image} alt="" />
      </div>
      <div className="flex gap-2 flex-col">
        <h2 className="text-xl font-bold">{product_title}</h2>
        <p className="text-slate-500 font-bold">Price: ${price}</p>
      </div>
      <div className="mt-6">
        <Link to={`products/${product_id}`}>
          <button className="border border-[#F3445A] rounded-lg p-2 text-[#F3445A] hover:bg-[#F3445A] hover:text-white">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
