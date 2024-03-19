import React from "react";
import { motion, easeInOut } from "framer-motion";
import MideHero from "../asset/mid3v.png";
import Mide2 from "../asset/mide-rbg.png";

//projects
import ProjCard from "./projcard";
import ProjCard2 from "./projcard2";
import myPort from "../asset/projects/portfolio.png";
import ageCalc from "../asset/projects/age-calculator.png";
import contactApp from "../asset/projects/contact-app.png";
import Screened from "../asset/projects/screened.png";
import toluApp from "../asset/projects/tolu-app.png";

import myCV from "../asset/FED - Ayomide Oke.pdf";
import "../App.css";
import {Contact} from "./contactForm";

import { FaTwitter, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaBootstrap} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneOutboundFill, BsInstagram } from "react-icons/bs";

const body = () => {
  return (
    <div className="body">
      <section className="hero">
        <span className="heroimg">
          {/* <img src={MideHero} alt="" srcset="" /> */}
        </span>
        <div className="hero--txt">
          <h6>Hi, Welcome to my portfolio site! My name is;</h6>
          <motion.h1
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Ayomide Oke
          </motion.h1>
          <motion.p
            initial={{ x: 300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            I'm a <b>FrontEnd Developer</b>
          </motion.p>
          <motion.div
            className="hero-btn"
            initial={{ y: 300, scale: 0.2 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href={myCV} download id="downloadcv">
              Download CV
            </a>
            <a href="#contact">
              <button>HIRE ME</button>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="socials-ctn"
          initial={{ y: 300, scale: 0.25 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaLinkedin />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ayobilli0ns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/ayobilli0ns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>

          <span></span>
        </motion.div>
      </section>

      {/* TOOLS */}

      {/* MY SKILLS */}
      <section className="myskills">
        <div className="skills">
          {/* <h1>TOOLS</h1> */}
          <div className="skills-ctn">
            <span className="html skill--card">
              {" "}
              <FaHtml5 /> HTML
            </span>
            <span className="css skill--card">
              <FaCss3Alt /> CSS
            </span>
            <span className="js skill--card">
              <DiJavascript /> JavaScript
            </span>
            <span className="react skill--card">
              {" "}
              <FaReact /> ReactJs
            </span>
            <span className="tailwind skill--card">
              {" "}
              <SiTailwindcss /> TailwindCSS
            </span>
            <span className="tailwind skill--card">
              {" "}
              <SiFirebase />
              Firebase
            </span>
            <span className="tailwind skill--card">
              <FaGithub /> Github
            </span>
            <span className="tailwind skill--card">
              <FaBootstrap /> Bootstrap
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{
          scale: 1,
          rotate: 0,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.35,
          ease: easeInOut,
        }}
      >
        <h1>PROJECTS</h1>
        <p className="pro-t-des">
          Here are some of my recently completed projects
        </p>

        <div className="proj-ctn">
          <ProjCard
            image={Screened}
            className="card2"
            title="SCREENED: A movie blogsite"
            description="A movie blogsite for movie enthusiasts. Collaborated with a cross-functional team to develop this project."
            tools="Tools: HTML, CSS, JavaScript, Django"
            link="http://screened.up.railway.app"
            link2="https://github.com/mideD3V/Screened-Movie-Blog"
          />
          <ProjCard2
            title="My personal porfolio"
            image={myPort}
            description="A portfolio website built from scratch to display my skills and qualifications."
            tools="Tools: HTML, CSS, ReactJS"
            link2=""
            link=""
          />

          <ProjCard
            image={contactApp}
            className="card2"
            title="Contact App"
            description="An app that can be used to add details of member to a list."
            tools="Tools: HTML, CSS, and JavaScript"
            link2="https://github.com/mideD3V/contact-app"
            link="https://my-contactapp.netlify.app/"
          />

          <ProjCard2
            image={ageCalc}
            title="Age calculator app"
            description="An simple app that accepts users' details (birthday) and displays their exact current age (in years, months, and days.)"
            link="https://my-agecalculatorapp.netlify.app"
            link2="https://github.com/mideD3V/age-calculator-app-main"
          />

          <ProjCard
            image={toluApp}
            title="A portfolio app"
            description="Design and Development of a portfolio site for a client."
            tools="Tools: Figma, HTML, CSS, JavaScript"
            link="https://icharlotte.netlify.app/"
            link2="https://github.com/mideD3V/tolu-app"
          />
        </div>
      </motion.section>

      {/* ABOUT ME */}
      <section id="about">
        <div className="about--me">
          <div className="about--txt">
            <h1>ABOUT ME</h1>

            <p>
              I'm a passionate and detail-oriented Frontend Developer with a
              drive for creating seamless and user-centric web experiences. I
              thrive on finding creative solutions to complex challenges and
              take pride in crafting visually engaging and responsive user
              interfaces.
              <br />
              <br />
              When not coding, you'll find me indulging in photography, playing
              musical instruments, or immersing myself in board games.
              <br />
              <br />
              I'm always open to exciting projects, collaboration opportunities,
              and new connections in the tech community. Let's create meaningful
              and impactful solutions together!
              <br />
              <br />
              Feel free to send me a message.
            </p>

            <button>Message me</button>
          </div>
          <div className="about-img">
            <span></span>
            <img src={MideHero} alt="mide img" />
            {/* <img src={Mide2} alt="mide img2" /> */}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="message-me">
          <h1>Send me a message</h1>
          <p>
            I will be happy to hear about your project and ideas. Feel free to
            get in touch with me using the contact form. <br />
            <br />I welcome any inquiries, feedback, or collaboration
            opportunities.
          </p>
        </div>
        {/* <br /> */}
        <Contact />
      </section>

      {/* FOOTER */}
      <section id="footer">
        <dir>
          <div id="logo" className="footer-logo">
            <a href="#"> ayomide.</a>
          </div>
          <div className="footer-contact">
            <p>
              <MdEmail /> ayomideoke9@gmail.com
            </p>
            <p>
              <BsTelephoneOutboundFill />
              +2348162087291
            </p>
            <p>
              <MdLocationPin /> Global
            </p>
          </div>
        </dir>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/mid3/" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ayobilli0ns" className="icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/mided3v/" className="icon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/ayobilli0ns/" className="icon">
            <BsInstagram />
          </a>
        </div>

        <div className="credit">
          Designed and developed my{" "}
          <a href="https://twitter.com/ayobilli0ns" target="_blank">
            {" "}
            mid3Billi0ns
          </a>
          .
        </div>
      </section>
      <section id="copyright" className="copyright">
        {" "}
        Copyright @2023. All rights reserved
      </section>
    </div>
  );
};

export default body;