import React from 'react'
import "./Navbar.css"
import { AiOutlineBars, AiOutlineSearch, AiFillSetting, AiOutlineSetting } from 'react-icons/ai'
import {IoMdArrowDropdown } from 'react-icons/io'

import {CiDark} from 'react-icons/ci'
import profile_image from '../../assets/profile_image.png'

const Navbar = ({data, isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <div className="navbar">
      <div className='left__part'>
      <AiOutlineBars size={27} className='makewhite' onClick={()=> setIsSidebarOpen(!isSidebarOpen)}/>
      <div className='navbar__search'>
        <input className='searchbar' placeholder='Search..'/>
        <AiOutlineSearch className='makewhite' size={20}/>
      </div>
          
      </div>
      <div className='right__part'>
        <CiDark className='makewhite' size={27}/>
        <AiFillSetting className='makewhite' size={27}/>
        <div className='navbar__profile__part'>
                    <div className='navbar__profile_image'>
                        <img src={profile_image} />
                    </div>
                    <div className='details'>
                       <div> {data.name}</div>
                       <div>{data.occupation}</div>
                    </div>
                    <div className='dropdown__icon'>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Navbar
