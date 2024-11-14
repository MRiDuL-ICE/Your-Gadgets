import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import noData from '../../assets/images/no data.png'
import { Helmet } from "react-helmet";

const Products = () => {
  const [category, setCategory] = useState("allProducts");
  const [isActive, setIsActive] = useState("allProducts");
  const [products, setProducts] = useState([]);
  const handleClick = (selected = "allProducts") => {
    setCategory(selected);
    setIsActive(selected);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(category);

  const catego = products.filter((product) => product.category === category);

  //   console.log(catego);
  // console.log(products);
  return (
    <div className="pt-10 mt-72">
      <Helmet>
        <title>{'Your Gadget'}</title>
      </Helmet>
      <h2 className="md:text-4xl text-xl text-center font-bold">
        Explore <span className="text-[#F3445A]">Cutting-Edge</span> Gadgets
      </h2>
      <div className="flex gap-6">
        <div className="w-1/5 h-full shadow-lg flex flex-col justify-start text-left items-start gap-4 rounded-lg border p-5 mt-20">
          <button
            onClick={() => {
              handleClick("allProducts");
            }}
            className={
              isActive === "allProducts"
                ? `p-3 rounded-lg bg-[#F3445A] text-white border-none hover:bg-[#F3445A] w-full text-left`
                : `w-full text-left bg-slate-100 p-3 rounded-lg`
            }
          >
            All Products
          </button>
          <button
            onClick={() => {
              handleClick("Laptop");
            }}
            className={
              isActive === "Laptop"
                ? `p-3 rounded-lg bg-[#F3445A] text-white border-none hover:bg-[#F3445A] w-full text-left`
                : `w-full text-left bg-slate-100 p-3 rounded-lg`
            }
          >
            Laptop
          </button>
          <button
            onClick={() => {
              handleClick("Mobile");
            }}
            className={
              isActive === "Mobile"
                ? `p-3 rounded-lg bg-[#F3445A] text-white border-none hover:bg-[#F3445A] w-full text-left`
                : `w-full text-left bg-slate-100 p-3 rounded-lg`
            }
          >
            Mobile
          </button>
          <button
            onClick={() => {
              handleClick("Smartwatch");
            }}
            className={
              isActive === "Smartwatch"
                ? `p-3 rounded-lg bg-[#F3445A] text-white border-none hover:bg-[#F3445A] w-full text-left`
                : `w-full text-left bg-slate-100 p-3 rounded-lg`
            }
          >
            Smart Watch
          </button>
          <button
            onClick={() => {
              handleClick("headphones");
            }}
            className={
              isActive === "headphones"
                ? `p-3 rounded-lg bg-[#F3445A] text-white border-none hover:bg-[#F3445A] w-full text-left`
                : `w-full text-left bg-slate-100 p-3 rounded-lg`
            }
          >
            Headphones
          </button>
        </div>
        <div className="w-4/5 border mt-20 rounded-lg grid grid-cols-3 gap-8 p-8 shadow-lg">
          {category === "allProducts" ? (
            products.length > 0 ? (
              products.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))
            ) : (
              <div className="col-span-3 p-6 shadow-lg flex flex-col rounded-lg border border-[#F3445A] justify-center items-center min-h-[400px]">
                <img className="w-20" src={noData} alt="" />
                <h2 className="text-5xl mt-8 font-bold text-center">No Data</h2>
              </div>
            )
          ) : catego.length > 0 ? (
            catego.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))
          ) : (
            <div className="col-span-3 p-6 shadow-lg flex flex-col rounded-lg  border border-[#F3445A] justify-center items-center min-h-[400px]">
              <img className="w-20" src={noData} alt="" />
              <h2 className="text-5xl mt-8 font-bold text-center">No Data</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
