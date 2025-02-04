import { Link } from "react-router-dom";
import g1 from "../../assets/gold22.jpg";
import g2 from "../../assets/gold1.avif";
import g3 from "../../assets/g1.avif";
import mo from "../../assets/mo2.jpeg";
import mo2 from "../../assets/mo3.jpg";
import m from "../../assets/m1.jpg";

export const OurService = () => {
  const oilProducts = [
    { name: "Premium Oil", image: mo },
    { name: "Refined Oil", image: m },
    { name: "Natural Oil", image: mo2 },
  ];
  const goldProducts = [
    { name: "Gold Coins", image: g1 },
    { name: "Gold Biscuit ", image: g2 },
    { name: "Gold Bar", image: g3 },
  ];

  return (
    <div className='md:p-6 py-12'>
      <h1 className='text-center font-extrabold text-xl md:text-4xl'>
        Our Services
      </h1>
      <div className='w-full flex flex-col gap-20 py-10'>
        {/* Oil Content */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <div className='md:w-[30%] text-center text-lg md:text-3xl font-bold text-red-600'>
            <Link
              to='/products/oil'
              className='p-2 transition duration-200 hover:underline'
            >
              Oil
            </Link>
          </div>
          <div className='w-full animate-fadeRight md:w-[60%] flex justify-around'>
            {oilProducts.map((product, index) => (
              <div
                key={index}
                className='w-[30%] h-[120px] md:h-[350px] p-2 border-2 border-gray-200 drop-shadow-xl rounded-md relative group overflow-hidden'
              >
                {/* Image with blur effect on hover */}
                <Link to='/products/oil'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover rounded-md transition duration-300 group-hover:blur-xs'
                  />

                  {/* Overlay Text */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                    <p className='text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded'>
                      {product.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Content */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <div className='w-full animate-fadeLeft md:w-[60%] flex justify-around'>
            {goldProducts.map((product, index) => (
              <div
                key={index}
                className='w-[30%] h-[120px] md:h-[350px] border-2 border-gray-200 drop-shadow-xl rounded-md p-2 relative group overflow-hidden'
              >
                {/* Image with blur effect on hover */}
                <Link to='/products/gold'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full rounded-md object-cover transition duration-300 group-hover:blur-xs'
                  />

                  {/* Overlay Text */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                    <p className='text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded'>
                      {product.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='md:w-[30%] text-center text-lg md:text-3xl font-bold text-red-600'>
            <Link
              to='/products/oil'
              className='p-2 transition duration-200 hover:underline'
            >
              Gold
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
