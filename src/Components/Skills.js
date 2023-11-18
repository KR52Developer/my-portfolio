import React from 'react';
import { FaWordpress } from "react-icons/fa";
import { FaAnglesDown, FaCss3Alt, FaGithub, FaHtml5, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa6';
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiPostman } from "react-icons/si";


const Skills = () => {
    return (
        <div>
            <div className='skillsContainer ' id='skills'>
                <h2>Skills</h2>

                <div className='skills' >

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaHtml5 style={{ fontSize: "35px", cursor: 'pointer' }}></FaHtml5>
                        <span>HTML</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaCss3Alt style={{ fontSize: "35px", cursor: 'pointer' }}></FaCss3Alt>
                        <span>CSS</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <IoLogoJavascript style={{ fontSize: "35px", cursor: 'pointer' }} >  </IoLogoJavascript >
                        <span>Javascript</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaBootstrap style={{ fontSize: "35px", cursor: 'pointer' }}></FaBootstrap>
                        <span>Bootstrap</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaReact style={{ fontSize: "35px", cursor: 'pointer' }} ></FaReact>
                        <span>React JS</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaNodeJs style={{ fontSize: "35px", cursor: 'pointer' }} ></FaNodeJs>
                        <span>Node Js</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <SiExpress style={{ fontSize: "35px", cursor: 'pointer' }} ></SiExpress >

                        <span>Express Js</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <SiMongodb style={{ fontSize: "35px", cursor: 'pointer' }} ></SiMongodb >
                        <span>Mongo DB</span>
                    </div >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <SiFirebase style={{ fontSize: "35px", cursor: 'pointer' }} ></SiFirebase >

                        <span>FireBase</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <SiPostman style={{ fontSize: "35px", cursor: 'pointer' }} ></SiPostman >

                        <span>PostMan</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaWordpress style={{ fontSize: "35px", cursor: 'pointer', color: '#fe551e' }} ></FaWordpress  >

                        <span>Wordpress</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <FaGithub style={{ fontSize: "35px", cursor: 'pointer' }}></FaGithub>
                        <span>Git</span>
                    </div>

                </div>
                <a href='#projects'><FaAnglesDown></FaAnglesDown>{" "}Projects</a>

            </div>

        </div>
    );
};

export default Skills;