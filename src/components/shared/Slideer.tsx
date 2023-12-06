import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button";

const SwiperJs = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      modules={[Autoplay]}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      //   spaceBetween={30}
      centeredSlides={true}
      navigation={true}
    >
      {/* <SwiperSlide>
        <div className=" flex justify-between  max-md:pt-4 max-md:pb-4 gap-8 items-center   ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-[4rem] max-md:text-5xl max-sm:text-4xl font-semibold text-[#084373]">
                Create{" "}
                <span className="text-[#084373] ">Happiness</span>
              </h1>
              <p className="text-[#084373]">
                Your help matters, no matter how big or small
              </p>
              <div className="flex mt-4 gap-4 items-center  ">
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
          </motion.div>

          

          
          <motion.div
            className=" w-1/2 mb-8 max-md:hidden flex justify-start items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }} // added a slight delay for sequential animation
          >
            <img
              src="/assets/images/skremove.png"
              alt="First Slide"
              className="w-full mb-16 ml-4 object-cover"
            />
          </motion.div>
        </div>
      </SwiperSlide> */}

      <SwiperSlide>
        <div className=" flex max-lg:flex-col gap-4 justify-between  max-md:pt-4 max-md:pb-4 items-center   ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >

            <div className="flex   flex-col gap-4">
              <h1 className="text-[4rem] pt-4 max-md:text-5xl max-sm:text-4xl font-semibold text-[#084373]">
                Be a part of  {" "}<br/>
                <span className="text-[#084373] ">Something <br/>  Big Today</span>
              </h1>
              <p className="text-[#084373] text-2xl">
                Your help matters, no matter how big or small
              </p>
              <div className="flex mt-4 gap-4 items-center  ">
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
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className=" flex-1  flex justify-center items-start"
          >
            <img
              src="/assets/images/kidsmall.png"
              alt="First Slide"
              className=" scale-125 my-10 translate-y-9 object-cover"
            />
          </motion.div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" flex justify-between max-lg:flex-col  max-md:pt-4 max-md:pb-4 gap-8 items-center   ">
          <div className="flex translate-y-10 flex-col gap-4">
            <h1 className="text-[4rem] max-md:text-5xl max-sm:text-4xl font-semibold text-[#084373]">
              Create{" "}
              <span className="text-[#084373] ">Happiness</span>
            </h1>
            <p className="text-[#084373] text-2xl">
              Your help matters, no matter how big or small
            </p>
            <div className="flex mt-4 gap-4 items-center  ">
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

          <div className=" w-full  flex justify-end items-start">
            <img
              src="/assets/images/fpremove.png"
              alt="First Slide"
              className="w-full ml-4 my-10 object-cover"
            />
          </div>
        </div>
    </SwiperSlide>
    </Swiper> 
  );
};

export default SwiperJs;
