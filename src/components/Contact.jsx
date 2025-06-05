import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validation = (dataObj) => {
    if (
      dataObj.full_name &&
      dataObj.email &&
      dataObj.phone &&
      dataObj.title &&
      dataObj.message
    ) {
      return true;
    }
    return false;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validation(values)) {
      setValidationError("Please fill out all the fields!");
      return;
    }
    setValidationError("");
    emailjs
      .sendForm(
        "service_5qhz6bq",
        "template_3jp61fr",
        e.target,
        "7DFNCElYgxrVHMFnr"
      )
      .then(
        (result) => console.log("Отправлено!"),
        (error) => console.error(error)
      );
  };

  return (
    <section className="contact active">
      <div className="contact-container">
        <div className="contact-box">
          <h2>Let's Work Together</h2>
          <p className="desc">
            Contact me to collaborate and develop web projects. I will be glad
            to discuss your ideas and suggest optimal solutions!
          </p>
          <div className="contact-detail">
            <i className="bx bxs-phone"></i>
            <div className="detail">
              <p>Phone</p>
              <p>(+994) 50 961 83 53</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="bx bxs-envelope"></i>
            <div className="detail">
              <p>Email</p>
              <p>shalala.shafiyeva23@gmail.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="bx bxs-map"></i>
            <div className="detail">
              <p>Addrress</p>
              <p>Baku, Azerbaijan</p>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <form action="#" onSubmit={sendEmail}>
            <h2 className="heading">Contact Me!</h2>
            <div className="field-box">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                id=""
                value={values.full_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id=""
                value={values.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                id=""
                value={values.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                placeholder="Email Subject"
                id=""
                value={values.title}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                id=""
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {validationError && <span className="validation-error">{validationError}</span>}
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
