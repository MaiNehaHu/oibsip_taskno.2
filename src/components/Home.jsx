// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import photo from "./photo.mp4";
import Nav from "./Nav";
import "./Style.css";

const Home = () => {
  //cursor design
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div>
      <Nav />
      <div className="home-container">
        <div className="detail">
          <p>Hey! My name is</p>
          <h1 className="name">Neha Kumari.</h1>
          <h3>I am a self taught FrontEnd Web Developer.</h3>
        </div>

        <div className="passport-photo">
          <video
            autoPlay
            src={photo}
            loop={true}
            controls={false}
            muted /**for looping, otherwise loop doesn't work*/
            type="video/mp4"
          ></video>
        </div>
      </div>
      <div className="big-page"></div>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </div>
  );
};

export default Home;
