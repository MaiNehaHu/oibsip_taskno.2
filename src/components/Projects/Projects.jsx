/* eslint-disable react/jsx-no-duplicate-props */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "../Style.css";
import List from "./ProjectsList";
import OneProject from "./OneProject";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [list, setList] = useState(List);
  let [isActiveButton1, setIsActiveButton1] = useState(true); //for button
  let [isActiveButton2, setIsActiveButton2] = useState(false);
  let [isActiveButton3, setIsActiveButton3] = useState(false);

  function showAll() {
    setList(List);
    setIsActiveButton1(true);
    setIsActiveButton2(false);
    setIsActiveButton3(false);
  }
  function filterReact() {
    const tag = "React";

    const ReactList = List.filter((Project) => {
      let flag = Project.tag === tag;
      return flag; //it will send true and the project will get into the array
    });
    setList(ReactList);
    setIsActiveButton2(true);
    setIsActiveButton1(false);
    setIsActiveButton3(false);
  }
  function filterVanilla() {
    const tag = "Vanilla";

    const VanillaList = List.filter((Project) => {
      let flag = Project.tag === tag;
      return flag;
    });
    setList(VanillaList);
    setIsActiveButton3(true);
    setIsActiveButton2(false);
    setIsActiveButton1(false);
  }

  useEffect(() => {}, [isActiveButton1, isActiveButton2, isActiveButton3]);
  //------------------Start---------------------------
  return (
    <div>
      <Nav />
      <div className="projects-container">
      <p>Hover and hold to get live link of the project</p>
        <div className="filter-buttons">
          <button
            onClick={filterReact}
            className={isActiveButton2 ? "active" : ""}
          >
            React JS
          </button>
          <button onClick={showAll} className={isActiveButton1 ? "active" : ""}>
            All Projects
          </button>
          <button
            onClick={filterVanilla}
            className={isActiveButton3 ? "active" : ""}
          >
            Vanilla JS
          </button>
        </div>

        <motion.div layout className="block">
          <AnimatePresence>
            {list.map((project) => {
              return (
                <OneProject
                  key={project.index}
                  Project={project}
                  href={project.href}
                  src={project.src}
                  name={project.name}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>{" "}
      <div className="projects-big-page"></div>
    </div>
  );
};

export default Projects;
