import React from 'react';
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home-container'>
        <Hero />
        <About />
        <Project />
        <Clients />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;