import g1 from "../../assets/g1.avif";
import g2 from "../../assets/g2.avif";
import g3 from "../../assets/g3.avif";

export const Content1 = () => {
  return (
    <div className=' w-full h-full pb-10'>
      <div className='animate-fadeUp text-md font-normal md:text-2xl font-sans m-6 md:m-10 '>
        <p className='text-center text-gray-700 w-full md:w-[60%] md:leading-8 m-auto'>
          We serve as facilitators and intermediaries rather than buyers or
          sellers. While we carry out due diligence on the{" "}
          <span className='text-amber-600'>gold products</span> we present, we
          strongly advise that you conduct your own verification and take the
          necessary precautions before finalizing any deal.
        </p>
      </div>
      <div className='w-full h-full flex flex-row items-center justify-center gap-6'>
        {[g1, g2, g3].map((img, index) => (
          <div
            key={index}
            className=' w-[75%] md:w-[20%] hover:duration-150 hover:scale-105 hover:shadow-xl transition-all h-[40%] bg-amber-300 drop-shadow-lg shadow-lg p-1 md:p-2  '
          >
            <img
              src={img}
              alt={`category${index + 1}`}
              className='w-full h-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
