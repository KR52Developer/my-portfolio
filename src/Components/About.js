import React from 'react';
import { FaAnglesDown, FaGithub, FaLinkedin } from "react-icons/fa6";

const About = () => {
    return (
        <div className='aboutContainer ' id='about'>
            <div className='aboutDescription'>
                <h2>About Me</h2>
                <span>
                    <ul>
                        <li className='aboutContent'>  My journey in the tech industry began when I discovered my love for <span className='aboutStrong'>JavaScript</span>. This led me to explore its full potential, from designing interactive front-end interfaces with <span className='aboutStrong'>React.js</span> to building robust back-end systems with <span className='aboutStrong'>Node.js and Express.js</span>. Along the way, I’ve also gained proficiency in <span className='aboutStrong'>MongoDB</span>, which allows me to design efficient and scalable databases.</li>

                        <li className='aboutContent'>  What sets me apart is my ability to handle projects end-to-end, from conceptualization and design to development and deployment. I believe in writing clean, efficient, and maintainable code. I also value collaboration and am always ready to learn new technologies and methodologies to stay at the forefront of this ever-evolving industry.</li>

                        <li className='aboutContent'>  In my spare time, I contribute to open-source projects and constantly work on personal projects to refine my skills and explore new technologies. I’m not just about codes and algorithms, though. I believe in the power of good design and user experience, and I always strive to build applications that are not only functional but also intuitive and user-friendly.</li>

                        <li className='aboutContent'>  Feel free to browse through my portfolio to see the projects I’ve worked on. If you’d like to collaborate or just say hi, don’t hesitate to get in touch!</li>

                    </ul></span>
                <div style={{ display: "flex", gap: '20px' }}>
                    <a href="https://github.com/KR52Developer" target='blank'>  <FaGithub style={{ fontSize: "35px", cursor: 'pointer' }}></FaGithub></a>
                    <a href="https://www.linkedin.com/in/kavin-ram/" target='blank'> <FaLinkedin style={{ fontSize: "35px", cursor: 'pointer' }}></FaLinkedin></a>
                </div>
                <a href='#skills'><FaAnglesDown></FaAnglesDown>{" "}Skills</a>

            </div>

        </div>
    );
};

export default About;