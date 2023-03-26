import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact-container h-[100vh] pt-10 bg-[#fff]'>
      <div className='wrapper h-[90vh] pt-10 px-4 xl:w-[1280px] xl:m-auto'>
        <h1 className='text-[#D4D4D4] font-extrabold text-5xl md:absolute lg:text-6xl xl:w-[1280px] xl:m-auto xl:relative'>Contact</h1>
        <div className='text-content tracking-widest md:justify-center md:text-center'>
            <h1 className='text-[#0F0F0F] uppercase text-xl font-bold xl:text-2xl'>Get in <span className='text-[#00A591]'>Touch</span></h1>
            <p className='text-[#9C9C9C] font-medium align-middle tracking-widest md:pt-4 md:align-middle md:items-center md:text-center md:justify-center md:self-center xl:text-sm'>We'd love to hear from you</p>
        </div>
        <div className='left-content md:grid md:pt-28 md:grid-cols-2 md:gap-10'>
          <form className='flex flex-col xl:text-lg xl:w-[400px]'>
            <input type="text" className="border-b-[1px] border-black focus:outline-none mt-16 mb-10 p-1" placeholder='Name: '/>
            <input type="email" className="border-b-[1px] border-black focus:outline-none mb-10 p-1" placeholder='Email: '/>
            <input type="number" className="border-b-[1px] border-black focus:outline-none mb-10 p-1" placeholder='Phone: '/>
            <textarea className=" border-b-[1px] border-black focus:outline-none rounded-sm mb-10 p-1 h-20" placeholder='Message: '/>
            <button className="mt-4 p-3 text-xl justify-center text-center bg-[#00A591] rounded-md font-bold hover:bg-[#00a592be] text-white flex gap-3" type="button">
              SEND <IoIosSend size={30}/>
            </button>
          </form>
          <div className='right-content pt-20 md:pt-20'>
            <div className='contacts-container xl:text-lg'>
                <p className='font-bold text-[#0F0F0F] mb-6 md:mb-7'>Number: <span className='font-medium text-[#0F0F0F]'>0912345678</span></p>
                <p className='font-bold text-[#0F0F0F] mb-6 md:mb-7'>Email Address: <span className='font-medium text-[#0F0F0F] mb-6'>modernmusedesign@gmail.com</span></p>
                <p className='font-bold text-[#0F0F0F] mb-6 md:mb-7'>Address: <span className='font-medium text-[#0F0F0F]'>123 Main Street, Suite 101, Anytown Makati</span></p>
            </div>
            <div className='socials-container flex gap-5 z-0'>
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
    </div>
  )
}

export default Contact
