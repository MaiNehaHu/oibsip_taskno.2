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
          <div className="tools">
            <div>
              <img
                src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                alt="html logo"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                alt="css logo"
              />{" "}
            </div>{" "}
            <div>
              <img
                src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt="js logo"
              />{" "}
            </div>{" "}
            <div>
              <img
                src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                alt="react js logo"
              />{" "}
            </div>
            <div>
              <img
                src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_5b35fcb985a6fab33d7799d84e923367/greensock-animation-platform.png"
                alt="gsap logo"
              />
            </div>
            <div>
              <img
                src="https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"
                alt="framer motion logo"
              />
            </div>
          </div>
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
