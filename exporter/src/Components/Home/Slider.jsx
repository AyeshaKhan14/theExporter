import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p1 from "../../assets/ns1.jpg";
import p2 from "../../assets/ns2.jpg";
import oil1 from "../../assets/ns3.jpg";

export const Slider = () => {
  const slides = [
    { image: p1, text: "Explore the Best Oils: Pure and Premium Quality" },
    {
      image: p2,
      text: "Discover the brilliance of gold, where luxury meets permanence.",
    },
    { image: oil1, text: "Explore the Best Oils: Pure and Premium Quality" },
  ];

  return (
    <div className='w-full relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className='w-full h-[200px] md:h-[420px] shadow-lg'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='relative overflow-hidden'>
            {/* Slide Image with Zoom-Out Effect */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover scale-110 transition-transform duration-[3000ms] ease-in-out'
            />

            {/* Black Overlay */}
            <div className='absolute inset-0 bg-black/30'></div>

            {/* Text Overlay */}
            <div className='absolute animate-fadeUp inset-0 flex items-center justify-center px-6 md:px-20 text-center text-zinc-400 text-md md:text-3xl font-bold transition-opacity duration-500 max-w-[80%] mx-auto leading-snug whitespace-pre-line'>
              {slide.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
