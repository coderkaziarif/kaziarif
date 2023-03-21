import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const links = [
    {
      id: 1,
      path: "home",
    },
    {
      id: 2,
      path: "about",
    },
    {
      id: 3,
      path: "portfolio",
    },
    {
      id: 4,
      path: "experience",
    },
    {
      id: 5,
      path: "contact",
    },
  ];
  return (
    <>
      <div
        className="flex justify-between items-center w-full h-20 px-4 text-black
     bg-gray-100 fixed "
      >
        {/* //! Logo*/}
        <div>
          <h1 className="text-5xl font-signature ml-2">Kazi Arif</h1>
        </div>
        {/* //! Desktop Navbar */}
        <ul className="hidden md:flex">
          {links.map(({ id, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-black hover:text-orange-500  hover:scale-105 duration-200"
            >
              <Link to={path} smooth duration={500}>
                {path}
              </Link>
            </li>
          ))}
        </ul>
        {/* //! Nav icon */}
        <div
          onClick={() => setOpenNav(!openNav)}
          className="cursor-pointer pr-4 z-10 text-gray-800 md:hidden"
        >
          {openNav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* //!mobile navbar */}

        {openNav && (
          <ul
            className="flex flex-col
             justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  "
          >
            {links.map(({ id, path }) => (
              <li
                key={id}
                className="px-4 py-6 cursor-pointer capitalize text-4xl"
              >
                <Link
                  onClick={() => setOpenNav(!openNav)}
                  to={path}
                  smooth
                  duration={500}
                >
                  {path}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
