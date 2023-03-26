import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact-container h-[90vh] pt-10 bg-[#fff]'>
      <div className='wrapper h-[90vh] pt-10 px-4'>
        <h1 className='text-[#D4D4D4] font-extrabold text-5xl md:absolute lg:text-6xl'>Contact</h1>
        <div className='text-content tracking-widest md:justify-center md:text-center'>
            <h1 className='text-[#0F0F0F] uppercase text-xl font-bold'>Get in <span className='text-[#00A591]'>Touch</span></h1>
            <p className='text-[#9C9C9C] uppercase'>We'd love to hear from you</p>
        </div>
        <div className='left-content'>
          <form className='flex flex-col'>
            <input type="text" className="border-b-[1px] border-black focus:outline-none mt-16 mb-10 p-1" placeholder='Name: '/>
            <input type="email" className="border-b-[1px] border-black focus:outline-none mb-10 p-1" placeholder='Email: '/>
            <input type="number" className="border-b-[1px] border-black focus:outline-none mb-10 p-1" placeholder='Phone: '/>
            <textarea className=" border-b-[1px] border-black focus:outline-none rounded-sm mb-10 p-1 h-20" placeholder='Message: '/>
          </form>
        </div>
        <div className='right-content'>
            <div className='contacts-container'>
                <p className='font-bold text-[#0F0F0F] mb-4'>Number: <span className='font-medium text-[#0F0F0F]'>0912345678</span></p>
                <p className='font-bold text-[#0F0F0F] mb-4'>Email Address: <span className='font-medium text-[#0F0F0F] mb-4'>modernmusedesign@gmail.com</span></p>
                <p className='font-bold text-[#0F0F0F] mb-4'>Address: <span className='font-medium text-[#0F0F0F]'>123 Main Street, Suite 101, Anytown Makati</span></p>
            </div>
            <div className='socials-container flex gap-5'>
               <Link to="/">
                    <FaFacebook size={30} />
               </Link>
               <Link to="/">
                    <FaTwitter size={30} />
               </Link>
               <Link to="/">
                    <FaInstagram size={30} />
               </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
