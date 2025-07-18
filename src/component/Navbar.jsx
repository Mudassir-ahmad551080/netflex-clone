import React from 'react'
import logo from '../assets/logo.png'
import search_icon from '..//assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_image from '../assets/profile_img.png'
import carot_icon from '../assets/caret_icon.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { logout } from '../firebase'
const Navbar = () => {

  const navgate = useNavigate();
  return (
    <div className=' flex justify-between bg-transparent md:p-10 p-5'>
      <div className='md:w-25 w-20'>
         <img className='md:mt-0 mt-2 ' src={logo} alt="" />
      </div>
    <div className='flex hidden md:flex'>
      <ul className='flex gap-5 bg-transparent'>
        <li className='cursor-pointer text-sm'>Home</li>
        <li className='cursor-pointer text-sm'>TV Shows</li>
        <li className='cursor-pointer text-sm'>My List</li>
        <li className='cursor-pointer text-sm'>New & Popular</li>
        <li className='cursor-pointer text-sm'>Browse my Language</li>
      </ul>
    </div>
    <div className='flex gap-5 hidden md:flex items-center text-center justify-center'>
     
      <img className='h-5 w-5' src={search_icon} alt="" />
      <p>children</p>
      
        <img className='h-5 h-5 cursor-pointer' src={bell_icon} alt="" />
        <div className='group flex gap-1 group-hover:relative relative'>
            <img className='cursor-pointer' src={profile_image}  alt="" />
            <img className='cursor-pointer' src={carot_icon} alt="" />
            <div id='dropdown' className='bg-zinc-700 rounded-md hidden top-[75%] right-0 cursor-pointer text-center p-2 group group-hover:block w-40 h-10 mt-2 absolute z-110 '>
            <p onClick={()=>logout()} className='underline' >Sign Out of Netflex</p>
            </div>
          
        </div>
    
    </div>
    <button onClick={()=> logout()} className='md:hidden block bg-red-500 p-2 w-20 rounded-full'>LogOut</button>
    </div>
  )
}

export default Navbar