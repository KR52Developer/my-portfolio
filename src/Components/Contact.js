import React from 'react';
import { FaAnglesUp, FaEnvelopeOpenText, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='contactContainer' id='contact'>
            <span>Get in Touch</span>
            <h2>Contact Me</h2>
            <div className='contactInfo' >
                <FaLinkedin style={{ fontSize: "35px", cursor: 'pointer' }}></FaLinkedin><a href='https://www.linkedin.com/in/kavin-ram/'><span>Linkedin</span></a>
                <FaEnvelopeOpenText style={{ fontSize: "35px", cursor: 'pointer' }}></FaEnvelopeOpenText><a href='mailto:kavinram052@gmail.com'><span>kavinram052@gmail.com</span></a>
            </div>
            <a href='#home'><FaAnglesUp></FaAnglesUp>{" "}Home</a>

        </div>
    );
};

export default Contact;;