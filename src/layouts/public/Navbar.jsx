import { useState } from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='navbar w-[90%] bg-black/40 text-white fixed top-3 left-6 lg:w-[97%] z-50 rounded-lg shadow-md'>
      {/* Navbar Start */}
      <div className='navbar-start flex items-center space-x-4'>
        {/* Logo */}
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          <img src='ICONS/Icons/1x/logo.png' alt='Logo' className='h-12' />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className='navbar-center hidden lg:flex  justify-evenly  space-x-4'>
        <ul className='menu menu-horizontal px-1 space-x-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/music'>Music</Link>
          </li>
          <li>
            <Link href='/press'>Press</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        {/* Social Media Icons for Desktop */}
      </div>

      {/* Navbar End */}
      <div className='navbar-end hidden lg:flex space-x-4  items-center align-middle'>
        {/* Social Media Icons for Desktop (this section is redundant and removed) */}
        <div className='flex items-center align-middle space-x-4 mr-6'>
          <Link
            href='https://www.facebook.com/singer.ishita.official/'
            target='blank'
          >
            <FaFacebookF className='h-6 w-6' />
          </Link>
          <Link href='https://www.instagram.com/singer.ishita.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          target='blank'>
            <FaInstagram className='h-6 w-6' />
          </Link>
          <Link href='#'>
            <FaXTwitter className='h-6 w-6' />
          </Link>
          <Link href='#'>
            <FaLinkedinIn className='h-6 w-6' />
          </Link>
          <Link href='https://youtube.com/@singer.ishita.official?si=xoGWRqCPBRM00f-_' target='blank'>
            <FaYoutube className='h-6 w-6' />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className='navbar-end lg:hidden'>
        <button className='btn btn-ghost' onClick={() => setIsMenuOpen(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 flex justify-end'>
          <div className='w-full bg-pink h-[50%] flex items-center flex-col p-4 rounded-2xl absolute top-0'>
            {/* Close Button */}
            <button
              className='self-end text-white m-4'
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-auto w-12'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className='flex flex-col space-y-4 text-white'>
              <li>
                <Link className='text-2xl' href='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='text-2xl' href='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='text-2xl' href='/music'>
                  Music
                </Link>
              </li>
              <li>
                <Link className='text-2xl' href='/press'>
                  Press
                </Link>
              </li>
              <li>
                <Link className='text-2xl' href='/contact'>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Icons for Mobile */}
            <div className='flex space-x-4 mt-6'>
              <Link href='#'>
                <FaFacebookF className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <FaInstagram className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <FaXTwitter className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <FaLinkedinIn className='h-6 w-6' />
              </Link>
              <Link href='#'>
                <FaYoutube className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
