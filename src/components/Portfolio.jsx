import React from "react";

function Portfolio() {
  return (
    <section className="portfolio active">
      <h2 className="heading">
        Latest <span>Portfolio</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-detail active">
            <p className="numb">01</p>
            <h3>Frontend Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              <p>HTML5, CSS3, Javascript</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i> <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
          <div className="portfolio-detail">
            <p className="numb">02</p>
            <h3>Full Stack Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              <p>MongoDB, Express, React, Node</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
          <div className="portfolio-detail">
            <p className="numb">03</p> <h3>Frontend Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              <p>React JS, Tailwind CSS</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
          <div className="portfolio-detail">
            <p className="numb">04</p>
            <h3>Full Stack Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              <p>MongoDB, Express js, Angular</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
          <div className="portfolio-detail">
            <p className="numb">05</p>
            <h3>Frontend Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              {" "}
              <p>HTML5, CSS3, Javascript</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
          <div className="portfolio-detail">
            <p className="numb">06</p>
            <h3>Full Stack Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="tech">
              <p>MongoDB, Express, React, Node</p>
            </div>
            <div className="live-github">
              <a href="#">
                <i className="bx bx-arrow-back"></i>
                <span>Live Project</span>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
                <span>Github Repository</span>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-carousel">
            <div className="img-slide">
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio1.jpg"
                  alt=""
                />
              </div>
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio2.jpg"
                  alt=""
                />
              </div>
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio3.jpg"
                  alt=""
                />
              </div>
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio4.jpg"
                  alt=""
                />
              </div>
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio5.jpg"
                  alt=""
                />
              </div>
              <div className="img-item">
                <img
                  src="public/images/cards/portfolio/portfolio6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="navigation">
            <button className="arrow-left disabled">
              <i className="bx bx-chevron-left"></i>
            </button>
            <button className="arrow-right">
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
