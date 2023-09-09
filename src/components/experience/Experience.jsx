import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills Do I Have ?</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </div>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>React.js</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Typescript</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Redux</h4>
              <small className="text-light">Beginner</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Next.js 13</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Figma</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>C</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>C++</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Postgres SQL</h4>
              <small className="text-light">Experienced</small>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>Microsoft SQL Server</h4>
              <small className="text-light">Experienced</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
