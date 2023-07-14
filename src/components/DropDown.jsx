import React from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div>
      <ul className="drop-down">
        <li>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/About">
            {" "}
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="/Education">
            {" "}
            <p>Education</p>
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            {" "}
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            {" "}
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
