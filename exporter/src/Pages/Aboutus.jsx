import bgpic from "../assets/pic.avif";
import { ContentOne } from "../Components/About/ContentOne";
import { ContentThird } from "../Components/About/ContentThird";
import { ContentTwo } from "../Components/About/ContentTwo";

export const Aboutus = () => {
  return (
    <>
      <div
        className='w-full h-[250px] md:h-[350px] flex justify-center items-center relative '
        style={{
          backgroundImage: `url(${bgpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='absolute inset-0 bg-black/35'></div>
        <div className='flex flex-col justify-center items-center gap-2'>
          {" "}
          <div
            data-aos='fade-up'
            className='text-lg md:text-3xl text-white  font-bold'
          >
            About Us
          </div>
          <div className='animate-fadeDown text-zinc-100 text-xs md:text-lg text-center font-medium italic  '>
            "In God We Trust; all others are required to comply for our mutual
            safety and success".
          </div>
        </div>
      </div>
      {/* about us content */}
      <ContentOne />
      <ContentTwo />
      <ContentThird />
    </>
  );
};
