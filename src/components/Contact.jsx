// src/pages/Contact.jsx
import { useState } from "react";
import "./Contact.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }

    // 🚀 Here you would normally send formData to your backend or email API
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        Have any questions, suggestions, or feedback? Fill out the form below
        and we’ll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows="5"
        ></textarea>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
