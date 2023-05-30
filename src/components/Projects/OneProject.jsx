// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const OneProject = ({ href, src, name }) => {
  return (
    <div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.7}}
        className="projects "
      >
        <div className="project-img">
          <img src={src} alt="College Website" />
          <p className="title">
            {name}
            <a href={href} target="blank">
              Live link
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OneProject;
