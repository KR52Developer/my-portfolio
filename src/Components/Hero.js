import React, { useEffect, useRef } from 'react';
import { FaAnglesDown, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Typed from 'typed.js';
import HeroImage from "../Images/profilePhotoO.jpg";

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['FullStack Mern Developer', 'Freelancer'],
            typeSpeed: 50,
            backSpeed: 80,
            loop: true,
            cursorChar: '|',
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        // <div className='heroContainerMain' id='home'>
        //     <div className='hellotext'><span >hello I'm <b>Kavin Ram</b></span></div>
        //     <div className='heroContainer'>
        //         <div className='descriptionContainer' >
        //             <span ref={el}></span>
        //         </div>
        //         <div className='btnContianer'>
        //             <button>Download CV</button>
        //         </div>
        //     </div>
        //     <div><FaAnglesDown></FaAnglesDown></div>
        // </div>
        <div className='heroContainerMain' id='hero' >
            <div className='heroContainer' >
                <div className='hellotext'><span >hello I'm <b><span className='name'>Kavin Ram</span></b></span></div>
                <div className='descriptionContainer' >
                    <span ref={el}></span>
                </div>
                <div ><span className='introSpan'>With a passion for coding and a knack for problem-solving. I specialize in creating dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js.</span></div>
                <div className='btnContianer'>
                    <a href='https://github.com/KR52Developer/my-resume/raw/main/KAVIN%20RAMALINGAM.pdf' target='blank'><button>Download CV</button></a>
                </div>
                <div style={{ display: "flex", gap: '20px' }}>
                    <a href="https://github.com/KR52Developer" target='blank'>  <FaGithub style={{ fontSize: "35px", cursor: 'pointer' }}></FaGithub></a>
                    <a href="https://www.linkedin.com/in/kavin-ram/" target='blank'> <FaLinkedin style={{ fontSize: "35px", cursor: 'pointer' }}></FaLinkedin></a>
                </div>
            </div>
            <div className='heroImageContainer' >
                <img src={HeroImage} alt='heroImage' width={500} height={500} style={{ marginBottom: "50px", borderRadius: "50%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", objectFit: 'cover' }} />
                <a href='#about'><FaAnglesDown></FaAnglesDown>{" "}About Me</a>
            </div>
        </div>
    );
};

export default Hero;
