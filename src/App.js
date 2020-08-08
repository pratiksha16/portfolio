import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import Header from "./components/header/header";

import Intro from "./components/intro/intro";

import About from "./components/about/about";
import Resume from "./components/Resume/resume";
import Project from "./components/projects/project";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Resume />
      <Project />
    </div>
  );
}

export default App;
