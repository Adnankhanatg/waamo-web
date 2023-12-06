// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Mousewheel, Pagination, Autoplay } from "swiper/modules";

export default function ImageSlider() {
  return (
    <div className="text-4xl font-bold mt-[80px] max-md:mt-[60px] max-sm:mt-[40px]  bg-[#dbeafe] font-sans">
      <h1 className="items-center text-center mb-8">Gallery</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={4}
        // mousewheel={true}
        grabCursor={true}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Mousewheel, Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mx-auto bg-[#dbeafe] h-[15rem] max-lg:h-[15rem] max-md:h-[10rem] mySwiper "
      >
        <SwiperSlide className="    flex h-full items-center justify-center text-lg">
          <img
            src="/assets/images/instagram-1.webp"
            alt="First Slide"
            className=" object-cover   sm:rounded-lg h-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" bg-[#dbeafe] flex    h-full  items-center  justify-center text-lg">
          <img
            src="/assets/images/instagram-2.webp"
            alt="First Slide"
            className=" object-cover   sm:rounded-lg h-full "
          />
        </SwiperSlide>
        <SwiperSlide className=" flex    h-full items-center  justify-center text-lg">
          <img
            src="/assets/images/instagram-3.webp"
            alt="First Slide"
            className=" object-cover sm:rounded-lg h-full "
          />
        </SwiperSlide>
        <SwiperSlide className=" flex  h-full    items-center  justify-center text-lg">
          <img
            src="/assets/images/instagram-4.webp"
            alt="First Slide"
            className=" object-cover   sm:rounded-lg h-full "
          />
        </SwiperSlide>
        <SwiperSlide className=" flex  h-full    items-center  justify-center text-lg">
          <img
            src="/assets/images/home-2.webp"
            alt="First Slide"
            className=" object-cover   sm:rounded-lg h-full "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
