import React, { useState } from "react";
import youtube from '../assets/youtube.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>We'd ❤️ to help! Feel free to say hello!</p>

            <div className="contact-container">
                {/* Contact Form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="contact-details">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me at:</p>
                    <ul>
                        <li><strong>Email:</strong> gilber1002@gmail.com</li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://www.youtube.com/@ooioioo" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /> </a>
                        <a href="https://github.com/ooioiooGT" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/gilberchen/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
