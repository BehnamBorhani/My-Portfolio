import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website designing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile application designing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive and user-friendly designing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability testing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating wireframes or low-fidelity prototypes.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating application programming interfaces (APIs).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing, developing, and managing databases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Setting up, configuring, and maintaining web servers and
                application servers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing user authentication and authorization systems.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating content management systems (CMS) or integrating
                existing ones.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating third-party APIs, services, and libraries</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>And more...</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing interactive, user-friendly web applications with
                responsive design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating animations and interactive elements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating content management systems (CMS).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Enhancing the overall user experience by improving usability,
                accessibility, and the flow of interaction within the interface.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server side and client side rendering optimization.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
