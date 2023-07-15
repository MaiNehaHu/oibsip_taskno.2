// eslint-disable-next-line no-unused-vars
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Working from "../images/Work.jpg";
import House from "../images/House.png";
import WebDev from "../images/Studies.png";
import Project from "../images/Project.png";
import CollegeWebsite from "../images/CollegeWebsite.png";
import "./Style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  //custom cursor
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  //animation
  const main = useRef(); ///given to parent of all elements

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const first_block = self.selector(".first-block");
      const odd_boxes = self.selector(".odd-block");
      const even_boxes = self.selector(".even-block");

      gsap.fromTo(
        first_block,
        { x: -400, opacity: 0, skewX: 30 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          delay: 1.7,
          duration: 2,
        }
      );
      odd_boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: -300, opacity: 0, skewX: 30 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              markers: false,
            },
          }
        );
      });
      even_boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: 300, opacity: 0, skewX: -30 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });

      //===============last========================//
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className="about-container">
      <div className="odd-circle"></div>
      <div className="odd-st-line"></div>
      <div className="even-circle"></div>
      <div className="even-st-line"></div>
      <div className="odd-circle"></div>
      <div className="odd-st-line"></div>
      <div className="even-circle"></div>
      <div className="even-st-line"></div>
      <div className="odd-circle"></div>

      <div className="about-content" ref={main}>
        <div className="column-block">
          <div className="content">
            <div className="content-info odd-block first-block">
              <p className="lines">
                {" "}
                I was born, raised, and educated in Bihar, India until I
                finished schooling.{" "}
              </p>
            </div>
          </div>
          <div className="image">
            <img src={House} alt="Village house" />
          </div>
        </div>
        <div className="column-block">
          <div className="image">
            <img src={WebDev} alt="Wev Development" />
          </div>
          <div className="content">
            <div className="content-info even-block">
              <p className="lines">
                {" "}
                I moved to Hyderabad, India for further studies.
              </p>
            </div>
          </div>
        </div>
        <div className="column-block">
          <div className="content">
            <div className="content-info odd-block">
              <p className="lines">
                In the sixth semester of my graduation, I began learning about
                Web Development.{" "}
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Working} alt="Girl Working" />
          </div>
        </div>
        <div className="column-block">
          <div className="image">
            <a href="https://mainehahu.github.io/Redesigned-College-Website/">
              <img
                id="college-website-img"
                src={CollegeWebsite}
                alt="First Website I designed and developed"
              />
            </a>
          </div>
          <div className="content">
            <div className="content-info even-block">
              <p className="lines">
                As a first project. I revamped our university's website.
              </p>
            </div>
          </div>
        </div>
        <div className="column-block">
          <div className="content">
            <div className="content-info odd-block">
              <p className="lines">
                You can see my projects{" "}
                <Link to="/Projects">
                  <span>here</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Project} alt="Girl doing projects" />
          </div>
        </div>
        <div
          className="about-cursor"
          style={{ left: cursorX + "px", top: cursorY + "px", zIndex: 11 }}
        ></div>
      </div>
      <div className="wait-page"> </div>
    </div>
  );
};

export default About;
