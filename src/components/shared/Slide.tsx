// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button";

const SwiperJs = () => {
  return (
    <Swiper
      slidesPerView={1}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      //   spaceBetween={30}
      centeredSlides={true}
      navigation={true}
    >
      <SwiperSlide>
        <div className="relative">
          {/* Image */}
          <img
            src="/assets/images/kidsLaughing.png"
            alt="First Slide"
            className="h-screen w-screen object-cover"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          {/* Text */}
          <div className="absolute top-1/2 left-1/2 mt-8 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-[4rem] max-md:text-5xl max-sm:text-4xl font-semibold text-white">
                Create{" "}
                <span className="text-primary-500  italic">Happiness</span>{" "}
              </h1>
              <p className="text-white">
                Your help matters, no matter how big or small
              </p>
              <div className="flex  mt-4 gap-4 items-center mx-auto ">
                <a href="/registration">
                  <Button label="Register Here" />
                </a>
                <a
                  href="https://waamo.securepayments.cardpointe.com/pay"
                  target="_blank"
                >
                  <Button secondary label="Donate Now" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="relative">
        
          <img
            src="/assets/images/Education.png"
            alt="First Slide"
            className="h-screen w-screen object-cover"
          />

      
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      
          <div className="absolute top-1/2 left-1/2 mt-8 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-[4rem] max-md:text-5xl max-sm:text-4xl font-semibold text-white">
                Be A Part of <br /> Something{" "}
                <span className="text-primary-500 italic">Big</span>{" "}
              </h1>
              <p className="text-white">
                Your help matters, no matter how big or small
              </p>
              <div className="flex mt-4 gap-4 items-center mx-auto ">
                <a href="/registration">
                  <Button label="Register Here" />
                </a>
                <a href="https://waamo.securepayments.cardpointe.com/pay" target="_blank">
                  <Button secondary label="Donate Now" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>*/}
    </Swiper>
  );
};

export default SwiperJs;
