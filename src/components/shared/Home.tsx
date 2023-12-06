import { useState, useEffect } from "react";
import CardStack from "./CardStack";
import Goal from "./Goal";
import ImageSlider from "./ImageSlider";
// import Slide from "./Slide";
import Slideer from "./Slideer";
import axios from "axios";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0); // New State
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios
      .get("https://api.waamoreliefdevelopment.org/public/api/user/popup")
      .then((response) => {
        // Set the modalImage state variable with the fetched data
        if (response.data.data) {
          setModalImage(response.data.data.image);
          setModalOpen(true);
        }
        // console.log(response);
      })
      .catch(() => {
        // console.error("Error fetching data:", error);
      });
  }, []);

 

  useEffect(() => {
    // Capture scroll position
    const onScroll = () => {
      setScrollTop(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="overflow-x-hidden container mx-auto ">
      <div className="max-md:pt-[80px] max-sm:pt-[40px] mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24">
        {isModalOpen && (
          <div
            style={{ top: `${scrollTop}px` }} // Update the top position
            className="absolute left-0 w-full h-full bg-black bg-opacity-50 flex items-start justify-center z-50"
          >
            <div className="bg-white p-4 rounded-lg shadow-xl mt-8">
              <div className="flex items-end justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="my-1 text-2xl font-extrabold text-red-500 "
                >
                  X
                </button>
              </div>
              <img
                // src="/assets/images/Small Donation Matters.webp"
                src={`https://api.waamoreliefdevelopment.org/storage/app/public/${modalImage}`}
                alt="Modal Content"
                className="w-[33rem] h-[33rem] rounded"
              />
              {/* <button
                onClick={() => setModalOpen(false)}
                className="mt-4 mb-4  p-2 bg-red-500 text-white rounded"
              >
                Close
              </button> */}
            </div>
          </div>
        )}
        <Slideer />
      </div>
      <Goal />
      <ImageSlider />
      <CardStack />
    </section>
  );
};

export default Home;
