import { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

const SideNav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const isActive = (navId) => {
    return activeNav === navId ? "active" : "";
  };

  return (
    <nav
      className={`bg-black w-max py-3 px-6 z-[2] fixed left-[50%] translate-x-[-50%] bottom-4 flex gap-3 rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-90 transition-opacity ${
        isScrolled ? "opacity-80" : "opacity-0"
      }`}
    >
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
        className={`bg-transparent p-4 rounded-full flex text-blue-500 ${
          isActive("#home") ? "bg-blue-600" : ""
        }`}
      >
        <AiOutlineHome className={isActive("#home") ? "text-black" : ""} />
      </a>
      <a
        href="#skills"
        onClick={() => handleNavClick("#skills")}
        className={`bg-transparent p-4 rounded-full flex text-blue-500 ${
          isActive("#skills") ? "bg-blue-600" : ""
        }`}
      >
        <AiOutlineUser className={isActive("#skills") ? "text-black" : ""} />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick("#experience")}
        className={`bg-transparent p-4 rounded-full flex text-blue-500 ${
          isActive("#experience") ? "bg-blue-600" : ""
        }`}
      >
        <AiOutlineBook
          className={isActive("#experience") ? "text-black" : ""}
        />
      </a>
      <a
        href="#projects"
        onClick={() => handleNavClick("#projects")}
        className={`bg-transparent p-4 rounded-full flex text-blue-500 ${
          isActive("#projects") ? "bg-blue-600" : ""
        }`}
      >
        <RiServiceLine className={isActive("#projects") ? "text-black" : ""} />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={`bg-transparent p-4 rounded-full flex text-blue-500 ${
          isActive("#contact") ? "bg-blue-600" : ""
        }`}
      >
        <AiOutlineMessage
          className={isActive("#contact") ? "text-black" : ""}
        />
      </a>
    </nav>
  );
};

export default SideNav;
