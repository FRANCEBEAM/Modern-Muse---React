import React from 'react';
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'

function Home() {
  return (
    <div className='home-container'>
        <Hero />
        <About />
        <Project />
    </div>
  )
}

export default Home;