import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-fit p-5 fixed top-0 bg-[linear-gradient(to_left,_rgba(10,10,10,0.1),_rgba(10,10,10,0.1))] rounded-lg m-2">
      <div className="w-full flex items-center justify-between gap-5">
          {/* Logo */}
          <div className="text-white font-bold text-2xl">
            <span className="font-bold text-white">I</span>
            <span className="text-white">ISHITA</span> MUSIC
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-white text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Music</Link>
            <Link href="#" className="hover:underline">Press</Link>
            <Link href="#" className="hover:underline">Contact</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
          <Link href="#"><i className="fab fa-instagram"></i></Link>
          <Link href="#"><i className="fab fa-twitter"></i></Link>
          <Link href="#"><i className="fab fa-linkedin"></i></Link>
          <Link href="#"><i className="fab fa-youtube"></i></Link>
        </div>
    </nav>
  )
}

export default Navbar
