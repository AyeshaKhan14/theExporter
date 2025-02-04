import o1 from "../../assets/oil2.webp";
import oil from "../../assets/ns3.jpg";

const OilContent = () => {
  return (
    <div className=' w-full h-full  mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-4 pb-[10%]'>
      <div className='w-[50%] h-full flex justify-center items-center'>
        <div
          className=' border border-red-500 w-full md:w-[65%] h-full'
          style={{ backgroundImage: `url(${oil})` }}
        >
          <img
            src={o1}
            alt='oil image'
            className='w-full h-[200px]  md:h-[300px] translate-1/6'
          />
        </div>
      </div>

      {/* content */}
      <div className='animate-fadeDown md:text-md text-sm font-normal w-[90%] md:w-[50%] md:text-2xl font-sans m-6 md:m-10 '>
        <p className='text-center text-gray-700 w-full md:leading-8 m-auto'>
          We offer a premium selection of oils for personal and industrial use.
          Our range includes <span className='text-amber-600'>industrial</span>{" "}
          and <span className='text-amber-600'>mineral oils</span>, which are
          essential for lubricating machinery, automotive applications, and
          various industrial needs. Each oil is carefully sourced to guarantee
          top-tier quality, reliability, and performance across a wide variety
          of applications.
        </p>
      </div>
    </div>
  );
};

export default OilContent;
