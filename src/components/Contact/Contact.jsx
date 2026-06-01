import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title" data-aos="fade-up">
          Contact <span>Me</span>
        </h2>
        <div className="contact__content">
          <div className="contact__info" data-aos="fade-right">
            <h3>Get In Touch</h3>
            <p>I am available for freelance and full-time positions.</p>
            <div className="contact__info-items">
              <div className="contact__info-item">
                <span>📧</span>
                <p>kassu1278@gmail.com</p>
              </div>
              <div className="contact__info-item">
                <span>📍</span>
                <p>Tampa, Florida, USA</p>
              </div>
              <div className="contact__info-item">
                <span>💻</span>
                <p>github.com/Kassahun52</p>
              </div>
            </div>
          </div>
          <div className="contact__form" data-aos="fade-left">
            {sent && (
              <div className="contact__success">
                ✅ Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;