import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="w-full  fixed top-0 p-6  bg-gradient-to-r from-black/40 to-black/40 rounded-lg shadow-md z-50 m-4 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <span className="text-white">I</span>
          <span className="text-white">SHITA</span> MUSIC
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Music
          </Link>
          <Link href="#" className="hover:underline">
            Press
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
