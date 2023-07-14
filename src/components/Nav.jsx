// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Style.css";
import resume from "../images/Resume.pdf";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Nav = () => {
  const [openDropDown, setDropDown] = useState(false);

  return (
    <div className="navigation-bar">
      <div className="github">
        <i className="fa fa-github">
          <a target="blank" href="https://github.com/MaiNehaHu"></a>
        </i>
      </div>

      <div className="navigations">
        <Link to="/">
          {" "}
          <p className="nav-btn">Home</p>
        </Link>

        <Link to="/About">
          {" "}
          <p className="nav-btn">About</p>
        </Link>

        <Link to="/Education">
          {" "}
          <p className="nav-btn">Education</p>
        </Link>

        <Link to="/Projects">
          {" "}
          <p className="nav-btn">Projects</p>
        </Link>

        <Link to="/Contact">
          {" "}
          <p className="nav-btn">Contact</p>
        </Link>

        <button className="resume" role="button">
          <a href={resume} download={true}>
            Resume
          </a>
        </button>

        <button id="Show-more" onClick={() => setDropDown((prev => !prev))}>
          <i class="fa fa-bars" aria-hidden="true"></i>
          {openDropDown && <DropDown />}
        </button>
      </div>
    </div>
  );
};

export default Nav;
