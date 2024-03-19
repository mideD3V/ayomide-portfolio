import React from "react";
import "../App.css";
import Dodov from "../asset/dodov.png";
import ImageSample from "../asset/engineer.jpeg";
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

const Projcard = ({ image, title, description, tools, link, link2 }) => {
  return (
    <>
      {" "}
      <div className="card card2">
        <div className="proj-desc">
          <h3>{title}</h3>
          <p>{description}</p>
          <h5>{tools}</h5>
          <div className="card-btn">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Site <ImNewTab />
            </a>
            <a href={link2} target="_blank" rel="noopener noreferrer">
              View Code  <FaGithub />
            </a>
          </div>
        </div>

        <img src={image} alt="" />
      </div>
    
    </>
  );
};
Projcard.defaultProps = {
  image: ImageSample,
  title: "New project",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  tools: "Tools: HTML, CSS, JS",
  link: "https://www.google.com/",
  link2: "https://www.google.com/",
};

export default Projcard;
