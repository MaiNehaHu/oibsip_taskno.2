import "./App.css";
import Doggy from "../src/images/Doggy.jpeg";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;
  /* Creating a regular expression 
  containing some mobile devices keywords 
  to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;
  /* Using test() method to search regexp in details
  it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    console.log(details);
    return (
      <h1>
        <img src={Doggy} alt="Sad dog image" />
        Please take some efforts to Set Desktop mode in
        Browser and Refresh {`{or}`} open Laptop.
      </h1>
    );
  } else {
    console.log(` Happy view!! You are using Desktop`);

    return (
      <div id="App">
        <BrowserRouter basename="oibsip_taskno.2">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/About"
              element={
                <div>
                  <Nav />
                  <About />
                </div>
              }
            />
            <Route
              exact
              path="/Education"
              element={
                <div>
                  <Nav />
                  <Education />
                </div>
              }
            />
            <Route
              exact
              path="/Projects"
              element={
                <div>
                  <Nav />
                  <Projects />
                </div>
              }
            />
            <Route
              exact
              path="/Contact"
              element={
                <div>
                  <Nav />
                  <Contact />
                </div>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
