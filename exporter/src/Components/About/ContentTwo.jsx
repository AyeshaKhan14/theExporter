import pic2 from "../../assets/pic2.avif";

export const ContentTwo = () => {
  return (
    <>
      <div className='py-10 flex flex-col items-center md:flex-row  justify-center gap-6 md:gap-10 '>
        <div className='flex flex-col gap-4 w-[80%] md:w-[40%]'>
          <div className='md:text-3xl font-bold text-[#302b63]'>
            OUR MISSION:
          </div>
          <div className='text-md md:text-lg leading-8'>
            We establish trustworthy connections through rigorous due diligence,
            and we insist that clients verify all details to ensure confidence
            in every deal.
          </div>
        </div>
        <div className='rounded-md w-[80%] h-[200px] md:h-[420px] md:w-[30%]'>
          <img
            src={pic2}
            className='h-full w-full hover:scale-105 drop-shadow-md transition delay-150 duration-300 ease-in-out shadow-lg rounded-md'
            alt='gold-image'
          />
        </div>
      </div>
    </>
  );
};
