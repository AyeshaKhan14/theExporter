import gold1 from "../../assets/gbg1.avif";

export const ContentOne = () => {
  return (
    <>
      <div className='py-10 flex flex-col items-center md:flex-row justify-center gap-6 md:gap-10 '>
        <div className='rounded-md w-[50%] md:h-[420px] md:w-[30%]'>
          <img
            src={gold1}
            className='h-full w-full hover:scale-105 drop-shadow-md transition delay-150 duration-300 ease-in-out shadow-lg rounded-md'
            alt='gold-image'
          />
        </div>
        <div className='flex flex-col gap-4 w-[80%] md:w-[40%]'>
          <div className='md:text-3xl font-bold text-[#302b63]'>ABOUT US</div>
          <div className='text-md md:text-lg leading-8'>
            We operate as facilitators or intermediaries, ensuring a smooth
            connection between parties without acting as buyers or sellers.
            While we diligently vet the products we present, we highly recommend
            that you conduct your own thorough verification and take essential
            precautions before moving forward with any agreement. This proactive
            approach will help safeguard your interests and lead to successful
            transactions.
          </div>
        </div>
      </div>
    </>
  );
};
