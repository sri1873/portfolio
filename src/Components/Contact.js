import React from 'react';
import 'O:/Portfolio/portfolio/src/assets/styles/contact.css';
const Contact = () => {
    return (
        <div className="contact-section" id="contact"> 
            <h2>Lets Build Together</h2>
            <p>I am always happy to hear from someone doing something they are passionate about, whether it be a project, a collaboration, or simply a hello.</p>
            <div className="contact-links">
                <a href="mailto:kssrikumar180703@gmail.com" className="contact-link">Email</a>
                <a href="https://www.linkedin.com/in/sri-kumar-s-1873/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
        </div>
    );
}   

export default Contact;