import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AiOutlineDownload } from "react-icons/ai";
import Facebook from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  // style={{ backgroundImage: "url(/bg-4.jpg)" }}
  return (
    <div className=" profile_container relative">
      {/* shape */}
      {/* <div className="shape"></div> */}
      {/* shape end*/}

      <div className="profile_parent flex ">
        <div className="profile_details text-center relative">
          <div className="">
            <div className="text-white transition ease-in-out delay-700">
              <Link to="/">
                <Facebook className="transition ease-in-out hover:scale-125 delay-700" />
              </Link>
              <Link to="/">
                <YouTubeIcon />
              </Link>
              <Link to="/">
                <InstagramIcon />
              </Link>
              <Link to="/">
                <LinkedInIcon />
              </Link>
            </div>
          </div>

          {/* <div className="shape"></div> */}
          <div className="profile_details_name my-8 font-semibold  text-white text-xl">
            <span className="profile_text">
              Hello, I'M{" "}
              <span className="highlighted_text text-[#ff5823]">Kazi Arif</span>
            </span>
          </div>

          <div className="profile_details_role flex-col my-10 mr-10">
            <span className="primary_text text-white  ">
              <h1 className=" text-sm md:text-2xl ">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Kazi Arif",
                    2000,
                    "Frontend Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile_role_tagline text-white text-lg font-popins">
                Building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile_options">
            {/* bg-[#4a08ff] ==blue */}
            <button className="text-white hover:text-black bg-black hover:bg-gray-200 border border-white font-medium rounded-3xl text-sm  px-5 py-2.5 text-center inline-flex items-center dark:text-white mr-8 mb-2 duration-700">
              Hire Me
            </button>
            <a href="kaziarif_Resume.pdf" download="kaziarif_Resume.pdf">
              <button className="text-white bg-[#ff5823] hover:bg-gray-200 border hover:border-white focus:ring-4 focus:outline-none  font-medium rounded-3xl text-sm hover:text-black px-2 py-3 md:px-5 md:py-2.5 text-center inline-flex items-center mr-2 mb-2 duration-700">
                Get Resume <AiOutlineDownload className="text-md md:text-lg" />
              </button>
            </a>
          </div>
        </div>
        {/* //todo Profile pic */}
        {/* 
        <div className="profile_pic"></div> */}
        {/* shape2 */}
        {/* <div class="custom-shape-divider-bottom-1674020554 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}

        {/* shape End */}
        <div className="profile_pic">
          <div className="profile_pic_bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
