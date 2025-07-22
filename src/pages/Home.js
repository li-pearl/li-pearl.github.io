import React from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import NotFound from "../NotFound";

export default function Home() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <About/>
      <Projects/>
      {/* <NotFound/> */}
      {/* <Awards/> */}
      {/* <Contact/> */}
    </main>
  );
}

