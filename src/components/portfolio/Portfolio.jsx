import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: img2,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: img3,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: img4,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: img5,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: img6,
    title: "This is a portfolio title",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="img" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
