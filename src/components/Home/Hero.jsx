import React from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import profile from "../../../public/men-2.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      className="h-screen w-full bg-gradient-to-b from-gray-100 to-white"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* //! Hero Content */}
        <div className=" flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-900 py-4 max-w-md">
            {/* I have 2 years of experience as a frontend developer. Currently, */}
             I love to work on web application using technologies Like
            React JS, Redux, Express, Mongo DB, Node js, Firebase, Github, Tailwind &
            Mui
          </p>
          <p className="font-signature"></p>
          <div>
            {/* from-orange-500 to-yellow-500 // from-purple-500 to-indigo-500 //from-orange-500 to-rose-500 */}
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-800 to-indigo-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          {/* <div>
            <img
              src={process.env.PUBLIC_URL + "/men-2.jpg"}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full "
            />
          </div> */}
        </div>
        {/* //! Hero img */}
        {/* className="mb-[150px]" */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/men-2.jpg"}
            alt="my profile"
            className="rounded-2xl mx-auto w-full "
          />
        </div>
        {/* //! Hero End */}
      </div>
    </div>
  );
};

export default Hero;
