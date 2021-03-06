import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ProjectSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <Footer />
    </>
  )
};

export default Home