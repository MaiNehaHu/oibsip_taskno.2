// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Style.css";
import Background from "../images/ContactBack.jpg";
import Neha from "../images/Neha.jpg";

const Contact = () => {
  //cursor design
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div id="contact">
      <img
        src={Background}
        alt="Earth pic in background"
        className="back-image"
      />

      <div className="contact-details">
        <img src={Neha} id="neha-img" alt="Neha image" />
        <div className="links">
          <div className="email">
            <a target="blank" href="mailto:neha207y1a0423@mlritm.ac.in">
              <i className="fa fa-envelope"></i>
            </a>
          </div>

          <div className="github">
            <a target="blank" href="https://github.com/MaiNehaHu">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="linkedin">
        <a
          target="blank"
          href="https://www.linkedin.com/in/nehakumari0102/"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>

      <div className="contact-big-page"></div>
      <div
        className="contact-cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </div>
  );
};

export default Contact;
