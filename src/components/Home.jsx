import { Link } from "react-router-dom";

const Home = () => (
  <section className="home active">
    <div className="home-detail">
      <h1>Shalala Shafiyeva</h1>
      <h2>
        I'm a{" "}
        <span style={{ "--i": 4 }} data-text="Frontend Developer">
          Frontend Developer
        </span>
        <span style={{ "--i": 3 }} data-text="Backend Developer">
          Backend Developer
        </span>
        <span style={{ "--i": 2 }} data-text="Fullstack Developer">
          Fullstack Developer
        </span>
        <span style={{ "--i": 1 }} data-text="Web Developer">
          Web Developer
        </span>
      </h2>
      <p>
        By combining clean code, responsive design, and functionality, I turn
        ideas into digital reality.
      </p>
      <div className="btn-sci">
        <Link to="/resume/Shalala_Shafiyeva_Full-stack_Developer_(RL).pdf" target="_blank" className="btn" download>Download CV</Link>
        <div className="sci">
          <Link to="https://github.com/Shalala-Shafiyeva">
            <i className="bx bxl-github"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/shalala-shafiyeva-1a18aa244/">
            <i className="bx bxl-linkedin"></i>
          </Link>
          {/* <Link to="#"><i className='bx bxl-discord-alt'></i></Link> */}
          {/* <Link to="#"><i className='bx bxl-youtube'></i></Link> */}
        </div>
      </div>
    </div>
    <div className="home-img">
      <div className="img-box">
        <div className="img-item">
          <img src="/images/user/profile.jfif" alt="User" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
