import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsSlack } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/erfanrz/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ErfanRez" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://join.slack.com/t/erfanrezaei/shared_invite/zt-22xj73epf-tc7qkn_MfxUWg8bQINyklA"
        target="_blank"
        rel="noreferrer"
      >
        <BsSlack />
      </a>
    </div>
  );
};

export default HeaderSocials;
