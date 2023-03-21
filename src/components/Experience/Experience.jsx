import React from "react";
import html from "../../Assets/html-5.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import github from "../../Assets/github.png";
import redux from "../../Assets/redux1.png";
import react from "../../Assets/science.png";
import nodejs from "../../Assets/nodejs.png";
import tailwind from "../../Assets/Tailwind_CSS.png";
import mongo from "../../Assets/MongoDB-Logo.wine.png";
import express from "../../Assets/express js.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-600",
    },

    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      style: "shadow-green-800",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-400",
    },

    {
      id: 9,
      src: express,
      title: "Express js",
      style: "shadow-white",
    },

    {
      id: 10,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-16">
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've workd with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              // className={
              //   "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
              //   " " +
              //   style
              // }
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="gellary" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <h3>Experience</h3>
    </div>
  );
};

export default Experience;
