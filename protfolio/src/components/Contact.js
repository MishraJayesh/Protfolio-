import React from 'react';
import '../styling/Contact.css';


const Contact = () => {
    return (
        <div>
            <center className="contact-header"><h1>Contact Us</h1></center>
            <div className="contact">
                <div className="contact-info">
                    <h2>Jayesh Mishra</h2>
                    <div className="contact-grid">
                        <a href="https://www.linkedin.com/in/jayesh-mishra-27771b165/"><div>LinkedIn</div></a>
                        <a href="https://github.com/MishraJayesh"><div>Github</div></a>
                        <a href="mailto:jkl2050jkl@gmail.com"><div>Email</div></a>
                        <a rel="noreferrer" target="_blank" href="tel:+919819924611"><div>Phone</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;