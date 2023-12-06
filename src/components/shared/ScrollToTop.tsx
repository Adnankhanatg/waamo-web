import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the button should be visible
  useEffect(() => {
    const checkVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-orange-300 text-white p-3 z-50 rounded-full focus:outline-none hover:bg-orange-700 lg:bottom-6 lg:right-6 md:bottom-5 md:right-5 sm:bottom-4 sm:right-4"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
