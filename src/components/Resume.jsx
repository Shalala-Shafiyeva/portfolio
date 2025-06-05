import { useState } from "react";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const handleActiveDetail = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="resume active">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Why Hire Me?</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.
          </p>
          <button
            className={`resume-btn ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => handleActiveDetail("experience")}
          >
            Experience
          </button>
          <button
            className={`resume-btn ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => handleActiveDetail("education")}
          >
            Education
          </button>
          <button
            className={`resume-btn ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => handleActiveDetail("skills")}
          >
            Skills
          </button>
          <button
            className={`resume-btn ${
              activeSection === "about" ? "active" : ""
            }`}
            onClick={() => handleActiveDetail("about")}
          >
            About Me
          </button>
        </div>

        <div className="resume-box">
          <div
            className={`resume-detail experience ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Experience</span>
            </h2>
            <p className="desc">
              I have practical experience in the field of web development, I am
              engaged in the creation, optimization and support of modern web
              solutions using advanced technologies.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <p className="year">02.2024 - 08.2023</p>
                <h3>Full-stack Developer</h3>{" "}
                <p className="company">Coders Caravan</p>
                <p>
                  I developed a fully functional e-commerce platform I
                  implemented a responsive design using HTML and CSS, ensuring a
                  seamless user experience across devices. The project includes
                  features like a shopping cart, user authentication, and
                  dynamic product pages I have set up an order and notification
                  management system to improve user interaction and improve the
                  efficiency of the store. All built with React.js and Laravel.
                </p>
              </div>
              {/* <div className="resume-item">
                {" "}
                <p className="year">2022 - 2023</p>
                <h3>Full Stack Developer</h3>
                <p className="company">Google</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3>
                <p className="company">Youtube</p>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>{" "}
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3>
                <p className="company">Youtube</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3>
                <p className="company">Youtube</p>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3>
                <p className="company">Youtube</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3> <p className="company">Youtube</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2021 - 2022</p>
                <h3>Backend Developer</h3>
                <p className="company">Youtube</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div> */}
            </div>
          </div>

          <div
            className={`resume-detail education ${
              activeSection === "education" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Education</span>
            </h2>
            <p className="desc">
              He has completed professional training in the field of web
              development, having mastered modern technologies and methods of
              creating digital solutions.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <p className="year">02.2024 - 09.2024</p>
                <h3>Full-stack Development</h3>
                <p className="company">Coders Caravan</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">03.2022 - 06.2022</p>
                <h3>Network Administration</h3>
                <p className="company">Code Academy</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
              <div className="resume-item">
                <p className="year">2019 - 2023</p>
                <h3>Computer Sciences</h3>
                <p className="company">Baku State University</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quae.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`resume-detail skills ${
              activeSection === "skills" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Skills</span>
            </h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quae.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <i className="bx bxl-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-css3"></i>
                <span>CSS</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-bootstrap"></i>
                <span>Bootstrap</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-javascript"></i>
                <span>Javascript</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-react"></i>
                <span>React</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-php"></i>
                <span>PHP</span>
              </div>
              <div className="resume-item">
                <i className="fa-brands fa-laravel"></i>
                <span>Laravel</span>
              </div>
              <div className="resume-item">
                <i className="bx bx-data"></i>
                <span>MySQL</span>
              </div>
              <div className="resume-item">
                <i className="bx bxl-git"></i>
                <span>Git</span>
              </div>
            </div>
          </div>

          <div
            className={`resume-detail about ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <p className="desc">
              I am a web developer specializing in creating modern,
              user-friendly and high-performance web solutions. I use modern
              technologies in my work and strive for optimization, quality and
              convenience of interfaces.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <p>
                  {" "}
                  Name<span>Shalala Shafiyeva</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Gender <span>Female </span>
                </p>
              </div>
              <div className="resume-item">
                {" "}
                <p>
                  Age<span>23 years old</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Status<span>Single</span>
                </p>
              </div>
              <div className="resume-item">
                {" "}
                <p>
                  City<span>Baku</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Nationality<span>Azerbaijan</span>
                </p>
              </div>
              <div className="resume-item">
                {" "}
                <p>
                  Experience<span>1 year</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Full Time<span>Available</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Freelance<span>Available </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Phone<span> +994 50 961 83 53</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Email<span>shalala.shafiyeva23@gmail.com</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  Languages<span>Russian, English</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
