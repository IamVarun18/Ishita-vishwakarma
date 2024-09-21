import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 p-6  w-full bg-gradient-to-r from-black/40 to-black/40 rounded-lg shadow-md z-50 m-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-white font-bold text-lg ">
            <img src="ICONS/Icons/1x/logo.png" alt="" className="h-12" />
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
          <div className="hidden md:flex h-full text-white justify-center items-center gap-4">
            <Link href="#">
            <img src="ICONS/Icons/1x/fb.png" alt="facebook" className="h-4 w-4" />
            </Link>
            <Link href="#">
            <img src="ICONS/Icons/1x/ig.png" alt="instagram"  className="h-4 w-4"/>
            </Link>
            <Link href="#">
            <img src="ICONS/Icons/1x/x.png" alt="twitter" className="h-4 w-4" />

            </Link>
            <Link href="#">
            <img src="ICONS/Icons/1x/li.png" alt="linkedin"  className="h-4 w-4"/>
            </Link>
            <Link href="#">
            <img src="ICONS/Icons/1x/yt.png" alt="youtube"  className="h-4 w-4"/>

            </Link>
          </div>
        </div>
      </nav>

    </div>
  );

};

export default Navbar;
