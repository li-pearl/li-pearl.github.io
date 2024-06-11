import React from "react";
import Typed from "react-typed";
// import Spline from "@splinetool/react-spline";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/3 lg:pr-24 lg:pl-20 md:pr-16 flex flex-col mb-16 md:mb-0 items-left">
          <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-white">
            Hi! I'm Anshi Paul
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium">
            <Typed
                className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600"
                // style={{ margin: "o o 1rem o" }}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                loop
                strings={["Programmer", "Maker", "Innovator", "FRC Competitor", "Aviation Enthusiast"]}
              />
          </h1>
          <p className="mb-8 leading-relaxed">
            A high school junior developing assistive technology and devices to make the world a
            better place.
          </p>
          <div className="flex justify-left">
            <a
              href="#projects"
              className="inline=flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              View Projects
            </a>
            <a
              href="/Anshi_Paul_CV.pdf"
              download
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <Spline scene="https://prod.spline.design/oaGIYQYrLKGnbG2w/scene.splinecode" /> */}
          <img
            className="object-cover object-center rounded"
            alt="plane"
            src="https://i.giphy.com/media/U29iRRUrtx1wjD4GR4/giphy.webp"
          />
        </div>
      </div>
    </section>
  );
}