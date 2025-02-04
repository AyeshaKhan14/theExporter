import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const ContactDetails = () => {
  return (
    <>
      <div className='flex p-4 flex-col items-center  gap-6'>
        <h2 className='md:text-2xl text-lg font-medium'>Contact Information</h2>
        <div className='flex justify-center  items-center'>
          <div className='text-md flex flex-col  md:w-[80%] gap-2'>
            <div className='flex justify-start  items-start w-[70%] gap-2'>
              {" "}
              <div className='text-[#302b63]'>
                <FaAddressBook />
              </div>
              <p className='mt-[-6px] underline'>
                House no.786, Byron Bazar Raipur C.G. 492 001 India
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-[#302b63]'>
                <FaPhone />
              </div>{" "}
              <p className='underline'> 98930.71122</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-[#302b63]'>
                <FaPhone />
              </div>{" "}
              <p className='underline'> 83932.66110</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-[#302b63] text-lg'>
                <MdOutlineMailOutline />
              </div>{" "}
              <p className='underline'> thexporter@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Google Map Embed */}
        <div className='w-full flex justify-center'>
          <iframe
            title='Google Map'
            className='w-full md:w-[80%] h-[250px]  md:h-[300px] rounded-md shadow-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6671710208874!2d81.6316901751981!3d21.249373180476942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0451e4986d%3A0x49009a65e20d65b1!2sByron%20Bazar%2C%20Raipur%2C%20Chhattisgarh%2C%20India!5e0!3m2!1sen!2sin!4v1707051529463!5m2!1sen!2sin'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </>
  );
};
