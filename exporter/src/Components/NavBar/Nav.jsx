import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

export const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenu((prevState) => !prevState);
  const toggleDropdown = () => setDropdown((prevState) => !prevState);

  // Function to close the menu when clicking a link
  const handleCloseMenu = () => {
    setMenu(false);
    setDropdown(false); // Also close the dropdown if open
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className='bg-[#302b63] w-full px-8 h-14 flex justify-between items-center sticky top-0 z-50'>
      <div className='text-xl text-white'>logo</div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-8 text-md text-zinc-100 font-bold h-full items-center'>
        <Link
          to='/'
          className={`p-2 transition ${
            isActive("/")
              ? "bg-zinc-200 text-[#302b63] underline"
              : "hover:bg-zinc-200 hover:text-[#302b63] hover:underline"
          }`}
        >
          Home
        </Link>

        {/* Product Dropdown */}
        <div
          className='relative p-2 group text-zinc-100 font-bold hover:bg-zinc-200 hover:text-[#302b63] hover:underline transition cursor-pointer'
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <div className='flex items-center gap-2'>
            Service <FaAngleDown className='hover:text-[#302b63]' />
          </div>
          {dropdown && (
            <div className='absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2 z-50'>
              <Link
                to='/products/oil'
                className='block px-4 py-2 hover:bg-gray-200'
              >
                Oil
              </Link>
              <Link
                to='/products/gold'
                className='block px-4 py-2 hover:bg-gray-200'
              >
                Gold
              </Link>
            </div>
          )}
        </div>

        <Link
          to='/about-us'
          className={`p-2 transition ${
            isActive("/about-us")
              ? "bg-zinc-200 text-[#302b63] underline"
              : "hover:bg-zinc-200 hover:text-[#302b63] hover:underline"
          }`}
        >
          About Us
        </Link>
        <Link
          to='/contact-us'
          className={`p-2 transition ${
            isActive("/contact-us")
              ? "bg-zinc-200 text-[#302b63] underline"
              : "hover:bg-zinc-200 hover:text-[#302b63] hover:underline"
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden text-white'>
        <GiHamburgerMenu onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className='absolute top-14 left-0 w-full bg-[#403a86] text-zinc-200 flex flex-col items-center z-50'>
          {/* Close Button */}
          <div className='flex justify-end w-full p-2 pr-4'>
            <AiOutlineClose
              onClick={toggleMenu}
              className='cursor-pointer text-xl font-extrabold'
            />
          </div>

          {/* Home */}
          <Link
            to='/'
            className={`w-full text-center p-2 transition duration-200 ${
              isActive("/") ? "bg-[#302b63] underline" : "hover:underline"
            }`}
            onClick={handleCloseMenu}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className='relative w-full text-center'>
            <div
              className='cursor-pointer flex justify-center items-center gap-2 p-2'
              onClick={toggleDropdown}
            >
              Service <FaAngleDown />
            </div>
            {dropdown && (
              <div className='bg-[#534baf] text-zinc-200 font-bold shadow-lg flex flex-col z-50'>
                <Link
                  to='/products/oil'
                  className='p-2 transition duration-200'
                  onClick={handleCloseMenu}
                >
                  Oil
                </Link>
                <Link
                  to='/products/gold'
                  className='p-2 transition duration-200'
                  onClick={handleCloseMenu}
                >
                  Gold
                </Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            to='/about-us'
            className={`w-full text-center p-2 transition duration-200 ${
              isActive("/about-us")
                ? "bg-[#302b63] underline"
                : "hover:underline"
            }`}
            onClick={handleCloseMenu}
          >
            About Us
          </Link>

          {/* Contact Us */}
          <Link
            to='/contact-us'
            className={`w-full text-center p-2 transition duration-200 ${
              isActive("/contact-us")
                ? "bg-[#302b63] underline"
                : "hover:underline"
            }`}
            onClick={handleCloseMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};
