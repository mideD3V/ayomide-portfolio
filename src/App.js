import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Header from "./components/header";
import About from "./components/header";
import Body from "./components/body";
import Project from "./components/projcard";
import {Contact} from "./components/contactForm";

function App() {
  return (
    <div className="App">
      <Header />
        <AnimatePresence>
      <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
      
      </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
