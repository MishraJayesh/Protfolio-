import React from 'react';
import '../styling/Contact.css';
import email from '../Asset/email.png';
import phone from '../Asset/phone.png';

const Contact = () => {
    return (
        <div>
            <center className="contact-header"><h1>Contact Us</h1></center>
            <div className="contact">
                <div className="contact-info">
                    <h2>Jayesh Mishra</h2>
                    <div className="contact-grid">
                        <a href="https://www.linkedin.com/in/jayesh-mishra-27771b165/">
                            <img src="https://p.kindpng.com/picc/s/32-326233_linkedin-thompson-electric-company-linkedin-logo-bw-png.png" alt="linkedin" />
                                <div>LinkedIn</div>
                        </a>
                        <a href="https://github.com/MishraJayesh">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
                                <div>Github</div>
                        </a>
                        <a href="mailto:jkl2050jkl@gmail.com">
                            <img src={email} alt="email" />
                                <div>Email</div>
                        </a>
                        <a rel="noreferrer" target="_blank" href="tel:+919819924611">
                            <img src={phone} alt="phone" />
                                <div>Phone</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;