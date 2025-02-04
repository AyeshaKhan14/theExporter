import bg from "../../assets/gbg1.avif";

export const GoldBg = () => {
  return (
    <div className='relative w-full h-[180px] md:h-[300px]'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Text Content */}
      <div className='relative flex justify-end items-center h-full'>
        <h2 className='text-zinc-100 animate-fadeDown text-2xl md:text-5xl mr-[10%] font-bold'>
          Best Gold Deal
          <br />
          with us.
        </h2>
      </div>
    </div>
  );
};
