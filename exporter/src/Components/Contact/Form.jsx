import { IoIosArrowDown } from "react-icons/io";

export const Form = () => {
  //function for form reset
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }

  return (
    <>
      <div className='border p-4 border-gray-300 flex flex-col justify-center items-center gap-10 w-[80%] drop-shadow-lg rounded-2xl m-auto md:m-0 md:w-[40%]'>
        <h2 className='md:text-3xl font-medium'>Contact Us</h2>
        <div className='w-full flex justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            name='contact'
            method='POST'
            action='https://getform.io/f/a505f45e-31f8-4a56-a7f1-7a535028342c'
            className=' flex flex-col gap-2 w-full md:w-96'
          >
            <div className='flex flex-col gap-2'>
              <lable>Name</lable>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                required
                className='p-2 bg-transparent border rounded-md border-gray-300	 text-gray-700 focus:outline-none'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <lable>Email</lable>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                required
                className='bg-transparent border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none'
              />
            </div>
            {/* phone no */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='relative inline-block'>
                <label
                  htmlFor='countryCode'
                  className='block text-gray-700 mb-2'
                >
                  Country Code
                </label>
                <select
                  name='countryCode'
                  className='p-2 bg-transparent border rounded-md border-gray-300 text-gray-700 focus:outline-none'
                >
                  <option value='+91'>+91 (India)</option>
                </select>
              </div>
              <div className='col-span-2'>
                <label htmlFor='phone' className='block text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input
                  id='phone'
                  name='Phone'
                  type='tel'
                  className='w-full p-3 border border-gray-300 rounded-md'
                  placeholder='Enter your phone number'
                  pattern='[0-9]{10}'
                  minLength='10'
                  maxLength='10'
                  required
                />
              </div>
            </div>
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='6'
              required
              className='p-2 mt-2 bg-transparent border-2 border-gray-300	rounded-md text-gray-600 focus:outline-none'
            ></textarea>

            <button
              type='submit'
              className='text-white w-full bg-blue-500 px-6 py-3 my-8 hover:bg-black cursor-pointer flex items-center justify-center rounded-md hover:scale-110 duration-150'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
