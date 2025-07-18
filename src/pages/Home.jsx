import React from 'react'
import Navbar from '../component/Navbar'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCard from '../component/TitleCard'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
     <Navbar/>
     <div className='  text-balance  mt-0 mb-20 md:ml-10'>
      <img className='md:mt-20 mx-2 md:mx-0  mt-40' src={hero_title} alt="" />
      <p className='mt-3 mx-2 md:mx-0 text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quibusdam, iste.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iste
      </p>
      <div className='flex mx-2 md:mx-0  md:gap-10 gap-5 '>
    <button className='text-black text-center items-center justify-center flex h-10 w-20 gap-2 mt-2 rounded-md  cursor-pointer bg-amber-50'><img className='text-white h-5' src={play_icon} alt="" />Play</button>
    <button className='flex h-10 w-30 bg-transparent border border-1 mt-2 rounded-md cursor-pointer text-center justify-center items-center'><img className='text-black h-10' src={info_icon} alt="" />More Info</button>
      </div>
       <TitleCard/>
     </div>
       <div>
        <TitleCard title="BlockBustor Movie" category={'top_rated'}/>
         <TitleCard title='Upcoming'  category={'popular'}/>
          <TitleCard title={"Only On Netflex"} category={'upcoming'} />
           <TitleCard title={"Most Popular"} category={'now_playing'} />
       </div>
       <Footer/>
    </div>
  )
}

export default Home