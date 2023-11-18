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

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaHtml5 style={{ fontSize: "35px", cursor: 'pointer' }}></FaHtml5>
                        <span>HTML</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaCss3Alt style={{ fontSize: "35px", cursor: 'pointer' }}></FaCss3Alt>
                        <span>CSS</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <IoLogoJavascript style={{ fontSize: "35px", cursor: 'pointer' }} >  </IoLogoJavascript >
                        <span>Javascript</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaBootstrap style={{ fontSize: "35px", cursor: 'pointer' }}></FaBootstrap>
                        <span>Bootstrap</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaReact style={{ fontSize: "35px", cursor: 'pointer' }} ></FaReact>
                        <span>React JS</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaNodeJs style={{ fontSize: "35px", cursor: 'pointer' }} ></FaNodeJs>
                        <span>Node Js</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <SiExpress style={{ fontSize: "35px", cursor: 'pointer' }} ></SiExpress >

                        <span>Express Js</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <SiMongodb style={{ fontSize: "35px", cursor: 'pointer' }} ></SiMongodb >
                        <span>Mongo DB</span>
                    </div >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <SiFirebase style={{ fontSize: "35px", cursor: 'pointer' }} ></SiFirebase >

                        <span>FireBase</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <SiPostman style={{ fontSize: "35px", cursor: 'pointer' }} ></SiPostman >

                        <span>PostMan</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FaWordpress style={{ fontSize: "35px", cursor: 'pointer' }} ></FaWordpress  >

                        <span>Wordpress</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
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