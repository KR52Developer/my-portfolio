import React, { useEffect, useState } from 'react';
// import { FaTerminal, FaUserEdit } from "react-icons/fa";
// import { FaHouseLaptop, FaPhoneVolume } from "react-icons/fa6";


const Header = () => {
    const [clicked, setClicked] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container' id='home'>
            <div className={`headerContainer ${scrolled ? 'scrolled' : ''}`}>
                <div className='logoContainer' style={{ width: '20%' }}> <span className="logo"><a href='#home'>Kavin Ram</a></span></div>

                <div className={`navCot ${navVisible ? 'visible' : ''}`} style={{ width: '80%' }} >
                    <div className='navContainer' style={{ width: '30%' }}>
                        <div className='navigation' >
                            <ul className='navLinks'>
                                {/* <li><div className='menuLi'><FaUserEdit style={{ color: "#113798", fontSize: "15px" }}></FaUserEdit><Link to="#">About</Link></div></li>
                                <li><div className='menuLi'><FaTerminal style={{ color: "#113798", fontSize: "15px" }}></FaTerminal><Link to="#">Skills</Link></div></li>
                                <li><div className='menuLi'><FaHouseLaptop style={{ color: "#113798", fontSize: "15px" }}></FaHouseLaptop><Link to="#">Projects</Link></div></li>
                                <li><div className='menuLi'><FaPhoneVolume style={{ color: "#113798", fontSize: "15px" }}></FaPhoneVolume><Link to="#">Contact</Link></div></li> */}
                                <li><div className='menuLi'><a href="#about" onClick={() => { setClicked(!clicked); setNavVisible(!navVisible); }}>About</a></div></li>
                                <li><div className='menuLi'><a href="#skills" onClick={() => { setClicked(!clicked); setNavVisible(!navVisible); }}>Skills</a></div></li>
                                <li><div className='menuLi'><a href="#projects" onClick={() => { setClicked(!clicked); setNavVisible(!navVisible); }}>Projects</a></div></li>
                                <li><div className='menuLi'><a href="#contact" onClick={() => { setClicked(!clicked); setNavVisible(!navVisible); }}>Contact</a></div></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={`menu ${clicked ? 'clicked' : ''}`} onClick={() => { setClicked(!clicked); setNavVisible(!navVisible); }}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div >
    );
};

export default Header;