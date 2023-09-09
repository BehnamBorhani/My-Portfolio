import React from "react";
import "./portfolio.css";
import img1 from "../../assets/youtube.png";
import img2 from "../../assets/sushi.png";
import img3 from "../../assets/gym.png";
import img4 from "../../assets/carhub.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Youtube Dark Clone",
    github: "https://github.com/ErfanRez/Youtube-Clone",
    demo: "https://erfanrz-youtube-clone.vercel.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Responsive Sushi Restaurant Website",
    github: "https://github.com/ErfanRez/Sushi-Restaurant",
    demo: "https://sushi4you.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Your Gym Couch Website",
    github: "https://github.com/ErfanRez/gyrm-temp",
    demo: "https://my-gym-three.vercel.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Modern Car Rental Website",
    github: "https://github.com/ErfanRez/carshow-temp",
    demo: "https://carshow-psi.vercel.app/",
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
