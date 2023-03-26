import React from 'react'

function About() {
  return (
    <div className='about-container'>
        <div className='wrapper px-4 h-[60vh] pt-10 md:h-[50vh] lg:grid lg:grid-cols-2 lg:pt-20 xl:w-[1280px] xl:m-auto '>
          <div className='left-content'>
              <figure>
                  <img className="hidden lg:block lg:w-96" src='./images/img-15.jpg'/>
              </figure>
          </div>
          <div className='right-content pt-10 lg:p-0'>
            <h1 className='text-[#D4D4D4] font-extrabold text-5xl pb-3 lg:text-6xl xl:text-7xl'>About</h1>
            <div className='text-content pt-10 lg:pt-14'>
              <p className='text-[#00A591] font-bold uppercase'>Modern Muse</p>
              <h1 className='text-[#121212] font-extrabold text-3xl pt-1 lg:text-4xl'>Transform Your Home with Our Interior Design Services</h1>
              <p className='text-[#121212] text-base mt-10 font-medium leading-8 lg:pt-10 lg:max-w-[500px]'>Welcome to Modern Muse Design, a full-service interior design firm dedicated to creating beautiful, functional living spaces that inspire and delight. Our team of experienced designers is passionate about design and committed to providing exceptional service to each and every client.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
