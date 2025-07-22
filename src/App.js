import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/:slug" element={<Article />} /> */}
        </Routes>
      </Router>
    </main>
  );
}
