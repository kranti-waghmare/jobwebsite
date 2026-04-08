import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const MovieNavbar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      {/* <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
        <Link to="/" className="max-md:flex-1">
          <img src={assets.logo} alt="" className="w-36 h-auto" />
        </Link>

        <div
          className={` ${isOpen ? "max-md:w-full" : "max-md-:w-0"} max-md:absolute max-md:font-medium duration-300 max-md:top-0 max-md-left-0 max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop:blur  bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] `}
        >
          <ImCross onClick={()=> setIsOpen(!isOpen)} className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" />
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/">Theater</Link>
          <Link to="/">Release</Link>
          <Link to="/favourite">favourites</Link>
        </div>

        <div className="flex items-center gap-8">
          <FaSearch className="max-md:hidden w-6 h-6 cursor-pointer" />
          <button className=" border p-2 bg-red-400 px-4 py-1 sm:px-7 sm:py-2 bg-primary-color hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
            Login
          </button>
        </div>
        <div>
          <IoMdMenu className="max-md:hidden w-6 h-6 cursor-pointer" />
        </div>
      </div> */}

      <div className="flex ">
          <div>
            logo
          </div>
          <div>
            list
          </div>
          <div>
            search
          </div>
          <div>
            login
          </div>
          <div>
            hamburger
          </div>
      </div>
    </>
  );
};

export default MovieNavbar;
