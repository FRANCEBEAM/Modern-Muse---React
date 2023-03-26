import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <div className='navbar fixed w-full z-10'>
        <div className='navbar-container flex h-24 items-center justify-between px-4 lg:max-w-[1280px] lg:relative lg:mx-auto z-10'>
            <h1 className='navbar-logo font-bold text-2xl text-white'>modern muse</h1>
            <div className='menu-icon absolute right-0 m-4 cursor-pointer lg:hidden text-white' onClick={handleClick}>
                {click ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>
            <ul className={click ? "nav-menu active text-white justify-center absolute text-center top-[96px] bg-[#121212] w-full leading-[60px] transition-all duration-500 left-[0%] lg:bg-[unset] lg:text-black lg:flex lg:justify-end lg:top-0 text-sm" : "nav-menu items-center text-sm text-white justify-center absolute w-full transition-all duration-500 top-[96px] leading-[60px] left-[-100%] text-center lg:left-[0%] lg:flex lg:justify-end lg:top-0"}>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        HOME
                    </NavLink>
                </li>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        ABOUT US
                    </NavLink>
                </li>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        PROJECTS
                    </NavLink>
                </li>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        BLOG
                    </NavLink>
                </li>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        CONTACT US
                    </NavLink>
                </li>
                <li className='nav-item p-4'>
                    <NavLink to="/">
                        <button className="px-3 bg-[#00A591] rounded-md font-bold hover:bg-[#00a592be] " type="button">
                            BOOK CONSULTATION
                        </button>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar