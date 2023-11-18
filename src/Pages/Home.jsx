import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div><Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer /></div>
    );
};

export default Home;