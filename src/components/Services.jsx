const Services = () => {
  const services = [
    { icon: "bx-code", title: "Frontend Development" },
    { icon: "bx-terminal", title: "Backend Development" }, 
    { icon: "bx-git-repo-forked", title: "Full-stack Development" },
    { icon: "bx-store", title: "eCommerce Planforms" },
    { icon: "bx-donate-blood", title: "Project support and updating" },
  ];
  return (
    <section className="services d-flex active">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="services-box" key={index}>
            <div className="icon">
              <i className={`bx ${service.icon}`}></i>
              <a href="#">
                <i className="bx bx-arrow-back"></i>
              </a>
            </div>
            <h3>{service.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
