import earth from "../../assets/earth.gif";
export const ContentThird = () => {
  return (
    <>
      <div className='hidden md:flex py-10  flex-col items-center md:flex-row justify-center gap-6 md:gap-10 '>
        <div className='rounded-md w-[50%] md:h-[350px] md:w-[30%]'>
          <img
            src={earth}
            className='h-full w-full  rounded-md'
            alt='gold-image'
          />
        </div>
        <div className='flex flex-col gap-4 w-[80%] md:w-[40%]'>
          {/* <div className='md:text-3xl font-bold'>ABOUT US</div> */}
          <div className='text-md md:text-lg font-medium leading-8 text-red-500 italic'>
            "In GOD our commander we trust, Everyone must to pass
            compliance"."God and the Universe are in Our Favor".
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className='md:hidden py-10 flex flex-col items-center md:flex-row justify-center gap-6 md:gap-10 '>
        <div className='flex flex-col gap-4 w-[80%] md:w-[40%]'>
          {/* <div className='md:text-3xl font-bold'>ABOUT US</div> */}
          <div className='text-md md:text-lg font-medium leading-8 text-red-500 italic'>
            "In GOD our commander we trust, Everyone must to pass
            compliance"."God and the Universe are in Our Favor".
          </div>
        </div>
        <div className='rounded-md w-[50%] md:h-[350px] md:w-[30%]'>
          <img
            src={earth}
            className='h-full w-full  rounded-md'
            alt='earth-image'
          />
        </div>
      </div>
    </>
  );
};
