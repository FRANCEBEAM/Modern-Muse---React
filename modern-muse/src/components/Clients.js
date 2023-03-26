import React from 'react'
import { Link } from 'react-router-dom'

function Clients() {
  return (
    <div className='clients-container'>
      <div className='wrapper px-4 pt-12 h-[120vh] md:h-[70vh]'>
       <h1 className='text-[#D4D4D4] font-extrabold text-5xl md:absolute md:px-4 lg:text-6xl'>Clients</h1>
        <div className='head-content md:justify-center tracking-widest md:text-center lg:items-center lg:justify-center lg:align-middle'>
            <h1 className='text-[#0F0F0F] uppercase text-xl font-bold'>Our Happy <span className='text-[#00A591]'>Clients</span></h1>
            <p className='text-[#9C9C9C] font-bold align-middle tracking-widest md:pt-4 md:align-middle md:items-center md:text-center md:justify-center md:self-center'>See Who We've worked with</p>
        </div>
        <div className='left-content'>

        </div>
        <div className='right-content justify-center flex'>
          <div className='company-clients w-100% h-100% pt-14 align-middle justify-center items-center self-center md:flex md:flex-row'>
            <div className='client-row1 w-100% h-100%'>
               <Link to="/">
                <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/flourish.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/flourish.svg'/>
               </Link>
               <Link to="/">
               <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
            </div>

            <div className='client-row2 w-100% h-100%'>
            <Link to="/">
                <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/flourish.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
               <Link to="/">
                <img className="m-10" src='./images/flourish.svg'/>
               </Link>
               <Link to="/">
               <img className="m-10" src='./images/designhaven.svg'/>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
