import React from 'react';
import Quiz from "../Images/quizApp.png";
import Chat from "../Images/chatApp.png";
import Ecommerce from "../Images/ecommerceApp.png";
import { FaAnglesDown } from 'react-icons/fa6';

const Projects = () => {
    return (
        <div className='projectsContainer' id='projects'>
            <h2>Projects</h2>
            <div className='projectsOne' style={{ display: 'flex', gap: '20px', justifyContent: "center", alignItems: "center" }}>
                <img src={Quiz} alt='' width={500} height={400} style={{ borderRadius: "1%" }} />
                <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}> <h3 style={{ marginBottom: "10px", fontSize: "30px " }}>Quiz-App</h3>
                    <span style={{ fontSize: "20px" }} >FrontEnd: React, Context API, useReducer, React-Router-Dom, Bootstrap.</span>
                    <span style={{ fontSize: "20px" }} >Database: Firebase.</span>
                    <div className="projectsButtonContainer" style={{ display: 'flex', gap: '20px', justifyContent: "flex-start", alignItems: "center", marginTop: "10px", textAlign: "center" }}>
                        <a href='https://github.com/KR52Developer/react-quiz-app' target='blank'><button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>GitHub Code </button></a>

                        <a href='https://kr-quiz-app01.netlify.app/' target='blank'> <button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>Live Demo </button></a>

                    </div>
                </div>
            </div>
            <div className='projectsTwo' style={{ display: 'flex', gap: '20px', justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}> <h3 style={{ marginBottom: "10px", fontSize: "30px " }}>Chat-App</h3>

                    <span style={{ fontSize: "20px" }} >FrontEnd: Front-end: React, Context API, useReducer, React-Router-Dom, Bootstrap,Material UI.</span>
                    <span style={{ fontSize: "20px" }} >Database: Firebase.</span>

                    <div className="projectsButtonContainer" style={{ display: 'flex', gap: '20px', justifyContent: "flex-start", alignItems: "center", marginTop: "10px" }}>
                        <a href='https://github.com/KR52Developer/chat-app' target='blank'><button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>GitHub Code </button></a>

                        <a href='https://kr-lets-connect-app.netlify.app/' target='blank'> <button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>Live Demo </button></a>

                    </div>
                </div>
                <img src={Chat} alt='' width={600} height={400} style={{ borderRadius: "1%" }} />

            </div>
            <div className='projectsThree' style={{ display: 'flex', gap: '20px', justifyContent: "center", alignItems: "center" }}>
                <img src={Ecommerce} alt='' width={500} height={400} style={{ borderRadius: "1%" }} />
                <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}> <h3 style={{ marginBottom: "10px", fontSize: "30px " }}>Ecommerce-App</h3>
                    <span style={{ fontSize: "20px" }} >FrontEnd: React, Context API, useReducer, React-Router-Dom, Bootstrap.</span>
                    <span style={{ fontSize: "20px" }} >Database: Firebase.</span>
                    <div className="projectsButtonContainer" style={{ display: 'flex', gap: '20px', justifyContent: "flex-start", alignItems: "center", marginTop: "10px" }}>
                        <a href='https://github.com/KR52Developer/e-commerce-client ' target='blank'><button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>GitHub Code </button></a>

                        <a href='https://kr-trend-cart.netlify.app/' target='blank'> <button style={{
                            color: "white",
                            background: "transparent",
                            outline: "none",
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "20px",
                            border: "2px solid #fe551e"
                        }}>Live Demo </button></a>

                    </div>
                </div>
            </div>
            <a href='#contact'><FaAnglesDown></FaAnglesDown>{" "}Contact</a>

        </div >
    );
};

export default Projects;