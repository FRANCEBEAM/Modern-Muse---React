import React from 'react'

function About() {
  return (
    <div className='about-container'>
      <h1 className='p-1 text-[#D4D4D4] font-extrabold text-5xl absolute mb-10'>about</h1>
        <div className='wrapper px-4 mb-10 mt-10'>
          <div className='left-content'>
              <figure>
                  <img className="hidden" src='./images/img-5.jpg'/>
              </figure>
          </div>
          <div className='right-content pt-10'>
            <div className='text-content pt-10'>
              <p className='text-[#00A591] font-bold uppercase'>Modern Muse</p>
              <h1 className='text-[#121212] font-extrabold text-4xl pt-1'>Transform Your Home with Our Interior Design Services</h1>
              <p className='text-[#121212] text-base mt-10 font-medium'>Welcome to Modern Muse Design, a full-service interior design firm dedicated to creating beautiful, functional living spaces that inspire and delight. Our team of experienced designers is passionate about design and committed to providing exceptional service to each and every client.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
