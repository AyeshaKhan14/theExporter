import { Link } from "react-router-dom";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <div className='border-2 w-full h-full border-black flex flex-col gap-10 bg-black py-4 '>
        <div className='w-full py-10 text-zinc-400 flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-50'>
          <div>LOGO</div>
          <div className='flex flex-col gap-4'>
            <div className='md:text-xl text-zinc-300 font-medium text-lg'>
              QUICK LINKS
            </div>
            <div className='text-md'>
              <div className='hover:underline hover:text-[#302b63]'>
                <Link to='/'>Home</Link>
              </div>
              <div className='flex gap-2 '>
                Product:
                <span className='hover:underline hover:text-[#302b63]'>
                  <Link to='/'>Gold</Link>
                </span>{" "}
                &{" "}
                <span className='hover:underline hover:text-[#302b63]'>
                  <Link to='/'>Oil</Link>
                </span>
              </div>
              <div className='hover:underline hover:text-[#302b63]'>
                <Link to='/about-us'>About Us</Link>
              </div>
              <div className='hover:underline hover:text-[#302b63]'>
                <Link to='/contact-us'>Contact Us</Link>
              </div>
            </div>
          </div>
          {/* Address section */}
          <div className='flex flex-col   gap-4'>
            <div className='md:text-xl text-zinc-300 text-center md:text-left text-lg'>
              ADDRESS
            </div>
            <div className='text-md flex flex-col md:items-start items-center gap-2'>
              <div className='flex  justify-center  items-center w-[70%] gap-2'>
                {" "}
                <span className='text-[#302b63]'>
                  <FaAddressBook />
                </span>
                <span>House no.786, Byron Bazar Raipur C.G. 492 001 India</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-[#302b63]'>
                  <FaPhone />
                </span>{" "}
                98930.71122
              </div>
              <div className='flex  gap-2'>
                <span className='text-[#302b63]'>
                  <FaPhone />
                </span>{" "}
                83932.66110
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-[#302b63] text-lg'>
                  <MdOutlineMailOutline />
                </span>{" "}
                thexporter@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className='text-zinc-100 text-center'>
          copyright @2025 All right reserved.
        </div>
      </div>
    </>
  );
};
