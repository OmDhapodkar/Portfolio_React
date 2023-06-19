import { useState, useEffect } from "react";
import { scrollTop } from "../assets";

const TopBack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`w-[80px] h-[80px] fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white text-sm ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <img src={scrollTop} alt="upArrow" />
    </button>
  );
};

export default TopBack;
