import "./App.css";
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
  return (
    <div id="App">
      <BrowserRouter basename="Portfolio">
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
};

export default App;
