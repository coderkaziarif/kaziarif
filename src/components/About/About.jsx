import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
        To build my career as a MERN Stack developer where I can show my skills and prove myself as quick learner. I always look for challenges where I can use my potential, that's why I'm ready to apply my passion for coding to a talented engineering team to develop quality solutions.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum
          dicta architecto error iusto suscipit, minima, voluptatem esse quo
          consectetur at reiciendis vitae nesciunt? Officia ipsam eveniet nihil,
          maiores fugiat dolor cumque. Aspernatur, quaerat assumenda?
        </p> */}
      </div>
    </div>
  );
};

export default About;
