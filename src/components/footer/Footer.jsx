import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        ErfanRz
      </a>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ErfanRez" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/erfanrz/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/erffan.r/"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>
        <a href="https://t.me/Erf4nRz" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ErfanRz. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
