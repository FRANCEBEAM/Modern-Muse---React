import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='wrapper bg-[#0F0F0F] h-[100vh] pt-10 px-4 lg:h-[80vh]'>
            <dive className="logo text-white">
                <h1 className='text-2xl font-bold'>modern muse</h1>
            </dive> 
            <div className='row1-container lg:grid lg:grid-cols-3 lg:pt-20'>
                <div className='left-content'>
                    <div className='col1-content text-[#D4D4D4] pt-7 lg:pt-0 lg:flex'>
                        <ul className='menu-items'>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    About Us
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Projects
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Blog
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col2-content text-[#D4D4D4]'>
                        <ul className='menu-items'>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Phone Number
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Email Address
                                </Link>
                            </li>
                            <li className='menu-item pb-4'>
                                <Link to="/">
                                    Address
                                </Link>
                            </li>
                        </ul>
                    </div>
            
                <div className='col3-content pt-10 lg:pt-0'>
                    <form className=''>
                        <label className='text-white flex pb-5 gap-1'>
                            <MdEmail size={20} /> <span className='font-bold'>Newsletter</span>
                        </label>
                        <input type="email" className="bg-transparent border-b-[1px] border-white focus:outline-none text-white p-1 flex font-medium w-80" placeholder='Email Address'/>
                        <button className='bg-[#00A591] font-medium text-[#F0F0F0] p-2 w-20 rounded-md mt-7' type='button'>SEND</button>
                    </form>
                </div>
            </div>
            <div className='end-footer text-[#D4D4D4] mt-20 pt-20 border-t-gray-600 border-t-2 justify-center text-center'>
                <div className='1row-footer gap-5 flex text-center justify-center'>
                    <Link to="/">
                        Privacy Policy
                    </Link>
                    <Link to="/">
                        Site Map
                    </Link>
                </div>
                <div className='2row-footer pt-10 text-white'>
                    <p>©2023 modernmuse. All rights reserved.</p>
                </div>
                <div className='3row-footer pt-10 flex gap-5 text-white justify-center text-center'>
                   <FaFacebook size={30} />
                   <FaTwitter size={30} />
                   <FaInstagram size={30} />
                </div>
            </div>
        </div>  
    </footer>
  )
}

export default Footer
