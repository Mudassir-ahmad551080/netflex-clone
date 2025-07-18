import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-6 py-10 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <img className="w-8 h-8 cursor-pointer hover:opacity-70" src={youtube_icon} alt="YouTube" />
            <img className="w-8 h-8 cursor-pointer hover:opacity-70" src={twitter_icon} alt="Twitter" />
            <img className="w-8 h-8 cursor-pointer hover:opacity-70" src={instagram_icon} alt="Instagram" />
            <img className="w-8 h-8 cursor-pointer hover:opacity-70" src={facebook_icon} alt="Facebook" />
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-3 text-sm text-zinc-400">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Description</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Help Center</li>
            <li className="cursor-pointer hover:underline">Jobs</li>
            <li className="cursor-pointer hover:underline">Privacy</li>
          </ul>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-center text-zinc-500 text-sm mt-8">@ 1997–2025 Netflex, Inc.</p>
      </footer>
    </>
  )
}

export default Footer
