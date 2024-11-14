import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/headphones.png";
import carticon from "../../assets/images/cart.png";
import wishicon from "../../assets/images/wishlist.png";
import { useContext } from "react";
import { itemsContext } from "../ContextAPI/ContextAPI";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(itemsContext);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn border-1 bg-white txtcolor border-[#f3445a] hover:bg-[#f3445a] hover:text-white"
              : "hover:bg-white border py-3 border-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn border-1 bg-[#F3445A] text-white border-[#f3445a] hover:bg-[#f3445a] hover:text-white mr-10"
              : "hover:bg-white border py-3 border-white"
          }
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn border-1 bg-[#F3445A] text-white border-[#f3445a] hover:bg-[#f3445a] hover:text-white mr-10"
              : "hover:bg-white border py-3 border-white"
          }
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar ${
        isHome ? "bg-[#F3445A] p-5" : "bg-white"
      } rounded-t-lg`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl">
          <img
            className="md:w-12 p-2 w-6 bg-white rounded-full"
            src={logo}
            alt=""
          />
          Your <span className="txtcolor bg-white rounded-lg p-2">Gadget</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-5">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <li className="menu">
          <NavLink
            to={`signup`}
            className={({ isActive }) =>
              isActive
                ? "btn border-1 bg-[#F3445A] text-white border-[#f3445a] hover:bg-[#f3445a] hover:text-white mr-10"
                : "hover:bg-white border py-3 border-white"
            }
          >
            Sign Up
          </NavLink>
        </li>
        <div className="relative">
          <button onClick={() => navigate("/dashboard/cart")}>
            <img
              className="w-14 bg-white rounded-full p-2"
              src={carticon}
              alt=""
            />
          </button>
          <div className="absolute -top-2 -right-4 bg-slate-100 rounded-full h-7 w-7 flex justify-center items-center">
            {cart.length}
          </div>
        </div>
        <div className="relative">
          <button onClick={() => navigate("/dashboard/wishlist")}>
            <img
              className="w-14 bg-white rounded-full p-2"
              src={wishicon}
              alt=""
            />
          </button>
          <div className="absolute -top-2 -right-4 bg-slate-100 rounded-full h-7 w-7 flex justify-center items-center">
            {wishlist.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
