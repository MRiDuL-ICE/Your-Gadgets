import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext, useState } from "react";
import { itemsContext } from "../ContextAPI/ContextAPI";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Details = () => {
  const { cart, wishlist } = useContext(itemsContext);
  console.log(cart);
  const { product_id } = useParams();
  const products = useLoaderData();
  const navigate = useNavigate();
  // console.log(typeof product_id);
  // console.log(products);
  const data = products.find((product) => product.product_id === product_id);
  console.log(data);
  const {
    product_image,
    product_title,
    price,
    description,
    specifications,
    availability,
    rating,
    warranty,
    color_options,
  } = data;
  const star = {
    size: 30,
    value: rating,
    edit: false,
  };

  const handleAddToCart = (name) => {
    cart.push(data);
    Swal.fire({
      title: "Added To Cart",
      text: `${name}`,
      icon: "success",
    });
    navigate("/");
  };
  const handleAddWish = (name, id) => {
    const wishExists = wishlist.find((wish) => (wish.product_id === id));
    if(!wishExists){
      wishlist.push(data);
      setIsClicked(true);
      Swal.fire({
        title: "Added To Wishlist",
        text: `${name}`,
        icon: "success",
      });
    }
    else{
      Swal.fire({
        title: "Already in Wishlist",
        text: `${name} is already in your wishlist.`,
        icon: "info",
      });
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-[#F3445A] w-[98%] mx-auto rounded-lg p-10 h-[500px] mb-72">
      <Helmet>
        <title>{"Your Gadget | Product Details"}</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Product Details
      </h2>
      <p className="text-white text-center mb-5">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="flex items-center bg-white w-8/12 shadow-lg mx-auto rounded-xl z-30 translate-y-10">
        <div className="w-5/12">
          <img className="rounded-xl" src={product_image} alt="" />
        </div>
        <div className="flex flex-col gap-4 bg p-8 rounded-lg">
          <h2 className="text-2xl font-bold ">{product_title}</h2>
          <h4 className="text-lg font-bold">Price: ${price}</h4>
          <p>
            {availability ? (
              <div className="badge border-green-500 text-green-500 badge-outline">
                In Stock
              </div>
            ) : (
              <div className="badge badge-secondary badge-outline">
                Out of Stock
              </div>
            )}
          </p>
          <p className="text-slate-500">{description}</p>
          <div>
            <h2 className="font-bold mb-3">Specifications: </h2>
            <ol className="list-decimal ml-14 text-slate-500">
              {specifications.map((specs, idx) => (
                <li key={idx}>{specs}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-bold">Rating: </h3>
            <div className="flex items-center gap-2">
              <ReactStars {...star}></ReactStars>
              <p className="badge bg-slate-200">{rating}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart(product_title)}
              className="btn bg-[#F3445A] text-white"
            >
              Add To Cart
              <img
                className=""
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </button>
            <button
              disabled={isClicked}
              onClick={() => handleAddWish(product_title, product_id)}
              className={`p-2 rounded-full ${
                isClicked
                  ? "bg-white cursor-not-allowed"
                  : "bg-slate-200 hover:bg-[#F3445A]"
              } `}
            >
              <img
                width="34"
                height="24"
                src="https://img.icons8.com/material-outlined/24/filled-like.png"
                alt="filled-like"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
