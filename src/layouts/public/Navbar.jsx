import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className="container fixed top-0 p-6  bg-gradient-to-r from-black/40 to-black/40 rounded-lg shadow-md z-50 m-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <img src="ICONS/Icons/1x/logo.png" alt="" className="h-16" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-white text-lg font-thin">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/music" className="hover:underline">
              Music
            </Link>
            <Link href="/press" className="hover:underline">
              Press
            </Link>
            <Link href="/contact" className="hover:underline">
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

    </div>
  );

};

export default Navbar;
