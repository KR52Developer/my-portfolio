import React from 'react';
import { FaAnglesDown, FaGithub, FaLinkedin } from "react-icons/fa6";

const About = () => {
    return (
        <div className='aboutContainer ' id='about'>
            <div className='aboutDescription'>
                <h2>About Me</h2>
                <span> I have two years of experience in this field. We basically deliver portfolio websites,
                    lead generation, and e-commerce websites. In that, my work is to develop the project’s design
                    from scratch and deliver it to the client. So far, I have developed 30+ websites and delivered
                    them successfully to the client. I have mentioned the top 4 websites on my resume. The challenges
                    I have faced in my work are mainly the customized requirements, like the design of the websites.
                    I overcome them with my creative ideas and finally, the client is also satisfied with that.
                </span>
                <div style={{ display: "flex", gap: '20px' }}>
                    <FaGithub style={{ fontSize: "35px", cursor: 'pointer' }}></FaGithub>
                    <FaLinkedin style={{ fontSize: "35px", cursor: 'pointer' }}></FaLinkedin>
                </div>
                <a href='#skills'><FaAnglesDown></FaAnglesDown>{" "}Skills</a>

            </div>

        </div>
    );
};

export default About;