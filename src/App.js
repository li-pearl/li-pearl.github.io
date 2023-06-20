import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Awards from "./components/Awards";

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      {/* <Awards/> */}
      <Contact/>
    </main>
  );
}

// {
//   "name": "my-portfolio",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@craco/craco": "^5.9.0",
//     "@heroicons/react": "^1.0.1",
//     "react": "^17.0.2",
//     "react-dom": "^17.0.2",
//     "react-scripts": "^1.1.5",
//     "react-typed": "^1.2.0"
//   },
//   "scripts": {
//     "start": "craco start",
//     "build": "craco build",
//     "test": "craco test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "devDependencies": {
//     "autoprefixer": "^9.8.6",
//     "postcss": "^7.0.36",
//     "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.0.2"
//   }
// }