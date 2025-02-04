import oo1 from "../../assets/oil1.jpg";

export const WeAre = () => {
  return (
    <div className='relative bg-[#E9E4F0] py-10 w-full h-[700px] flex justify-center items-center'>
      {/* First Child - Main Box */}
      <div
        className='relative w-full md:w-[60%]  h-full border border-blue-500 flex justify-center items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${oo1})` }}
      >
        {/* Text inside main box */}
        {/* Black Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>
        {/* Second Child - Responsive Positioning */}
        <div className='animate-fadeDown absolute p-6 text-sm md:text-xl md:top-1/2 md:right-[-20%] bg-[#E9E4F0] drop-shadow-xl md:transform md:-translate-y-1/2 w-[80%] h-[60%]  flex justify-center items-center  bg-opacity-80'>
          <div className='flex flex-col gap-2 '>
            <h2 className='text-[#302b63] text-lg md:text-4xl font-bold'>
              Who We are
            </h2>
            <p>
              {" "}
              We serve as facilitators or intermediaries, ensuring smooth
              connections between parties without engaging as buyers or sellers.
              While we carefully vet the products we present, such as oil and
              gold, we strongly recommend that you conduct your own thorough
              verification and take necessary precautions before entering into
              any agreements. This proactive approach will help protect your
              interests and contribute to successful transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
