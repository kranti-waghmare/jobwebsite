import React from "react";
import { assets } from "../assets/assets";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <>
      <div className="shadow py-4">
        <div className="flex  justify-between 2xl:px-20 container px-4 mx-auto items-center">
          <img src={assets.logo} alt="" />
          {user ? (
            <div className="flex items-center gap-3">
                <Link to="/applications">Applied Job</Link>
                <p>|</p>
                <p>Hi {user.fullName+ " " +user.lastName}</p>
              
                <UserButton/>
            </div>
          ) : (
            <div className="flex gap-3 ">
              <button>Recruiter </button>
              <button
                onClick={(e) => openSignIn()}
                className="rounded-full bg-blue-600 text-white px-6 py-2"
              >
                Login{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
