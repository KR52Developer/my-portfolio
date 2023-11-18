import React, { useEffect, useRef } from 'react';
import { FaAnglesDown } from 'react-icons/fa6';
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
        <div className='heroContainerMain' id='home'>
            <div className='heroContainer'>
                <div className='hellotext'><span >hello I'm <b>Kavin Ram</b></span></div>
                <div className='descriptionContainer' >
                    <span ref={el}></span>
                </div>
                <div className='btnContianer'>
                    <button>Download CV</button>
                </div>
            </div>
            <div className='heroImageContainer' >
                <img src={HeroImage} alt='heroImage' width={400} height={400} style={{ marginBottom: "50px", borderRadius: "50%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", objectFit: 'cover' }} />
                <a href='#about'><FaAnglesDown></FaAnglesDown>{" "}About Me</a>
            </div>
        </div>
    );
};

export default Hero;
