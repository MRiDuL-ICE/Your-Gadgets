import { useContext, useEffect, useState } from "react";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { itemsContext } from "../ContextAPI/ContextAPI";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [purchaseCost, setPurchaseCost] = useState(0);
  const { cart, setCart, wishlist, setWishlist } = useContext(itemsContext);
  console.log(cart);
  const [cartList, setCartList] = useState(cart)
  const { product_id } = useLoaderData();
  console.log(product_id);
  const location = useLocation();
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false)

  const isWishlist = location.pathname.includes("/wishlist");

  const totalCost = cart?.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("cart");
    }
  }, [location, navigate]);

  const handleAddToCart = (selectedItem, name) => {
    setCart((prevCart) => [...prevCart, selectedItem]);
    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (item) => item.product_title !== selectedItem.product_title
      )
    );
    Swal.fire({
      title: 'Added To Cart',
      text: `${name}`,
      icon: "success"
    });
    navigate('/dashboard/cart')
  };
  const handleDeleteFromCart = (selectedItem) => {
    const updatedCart = cart.filter(
      (item) => item.product_title !== selectedItem.product_title
    );
    setCart(updatedCart);
  };
  const handleDeleteFromWishList = (selectedItem) => {
    const updatedWishList = wishlist.filter(
      (item) => item.product_title !== selectedItem.product_title
    );
    setWishlist(updatedWishList);
  };
  const handlePurchase = () => {
    setCart([]);
    document.getElementById("my_modal_1").showModal();
    setPurchaseCost(totalCost);
    
  };
  const handleNavigate = () => {
    navigate('/')
  }

  const handleSortByPrice = () => {
    const descendingPrice = cart.sort((a, b) => b.price - a.price);
    setCartList([...descendingPrice])
  }

  return (
    <div>
      <Helmet>
        <title>{"Your Gadget | Dashboard"}</title>
      </Helmet>
      <div className="bg-[#F3445A] w-[98%] mx-auto rounded-lg p-10 h-full mb-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Dashboard
        </h2>
        <p className="text-white text-center mb-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-10 mx-auto text-center justify-center">
          <NavLink
            to={"/dashboard/cart"}
            className={({ isActive }) =>
              `btn ${
                isActive
                  ? "border-1 bg-white txtcolor border-[#f3445a] hover:bg-[#f3445a] hover:text-white"
                  : "hover:bg-white border-1 text-white border-white bg-[#F3445A]"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to={"/dashboard/wishlist"}
            className={({ isActive }) =>
              `btn ${
                isActive
                  ? "border-1 bg-white txtcolor border-[#f3445a] hover:bg-[#f3445a] hover:text-white"
                  : "hover:bg-white border-1 text-white border-white bg-[#F3445A]"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      {!isWishlist && (
        <div className="w-[98%] mx-auto flex flex-col gap-4 mt-16">
          <div className="flex justify-between w-[98%] mx-auto">
            <div>
              <h2 className="text-3xl font-bold">Cart</h2>
            </div>
            <div className="flex gap-4 items-center">
              <h2 className="text-2xl font-bold">Total cost: ${totalCost}</h2>
              <button onClick={handleSortByPrice} className="btn border-[#F3445A] bg-white text-[#F3445A]">
                Sort By Price{" "}
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ios-filled/50/FA5252/sorting-arrows.png"
                  alt="sorting-arrows"
                />
              </button>
              <button disabled={cart.length === 0}
                onClick={handlePurchase}
                className={`btn bg-[#F3445A] ${cart.length === 0 ? "cursor-not-allowed" : "cursor"} text-white`}
              >
                Purchase
              </button>
            </div>
          </div>
          {cart.map((item) => (
            <div
              key={item.product_title || index}
              className="w-full rounded-xl px-10 py-5 flex  items-center gap-2 shadow-lg border border-[#F3445A]"
            >
              <div className="w-full rounded-xl flex  items-center gap-2">
                <div className="w-96">
                  <img
                    className="rounded-xl object-cover h-[200px]"
                    src={item.product_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{item.product_title}</h2>
                  <p className="text-slate-500">{item.description}</p>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
              </div>
              <div>
                <button onClick={() => handleDeleteFromCart(item)} className="">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/FA5252/delete-forever.png"
                    alt="delete-forever"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {isWishlist && (
        <div className="w-[98%] mx-auto mt-16">
          <h2 className="text-3xl font-bold">Wishlist</h2>
          {wishlist.map((wish) => (
            <div
              key={wish.product_title || index}
              className="w-full rounded-xl px-10 py-5 flex  items-center gap-2 mt-7 shadow-lg border border-[#F3445A]"
            >
              <div className="w-full rounded-xl flex  items-center gap-2">
                <div className="w-96">
                  <img
                    className="rounded-xl object-cover h-[200px]"
                    src={wish.product_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{wish.product_title}</h2>
                  <p className="text-slate-500">{wish.description}</p>
                  <p className="font-bold">Price: ${wish.price}</p>
                  <button
                    onClick={() => handleAddToCart(wish, wish.product_title)}
                    className="btn bg-[#F3445A] text-white w-6/12"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteFromWishList(wish)}
                  className=""
                >
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/FA5252/delete-forever.png"
                    alt="delete-forever"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col">
          <div className="flex justify-center text-center items-center mb-4">
          <img className="text-center"
            height="80"
            width="80"
            src="https://img.icons8.com/ios-filled/100/40C057/instagram-verification-badge.png"
            alt="instagram-verification-badge"
          />
          </div>
          <h3 className="font-bold text-2xl text-center">Payment Successful</h3>
          <p className="py-4 text-slate-500 text-center">
            Thanks for purchasing.
          </p>
          <p className="text-slate-500 text-center">Total: {purchaseCost}</p>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button onClick={handleNavigate} className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
