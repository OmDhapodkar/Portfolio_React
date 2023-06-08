import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-1`}>
              Portfolio
              <span className="text-white"> Website</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              I'm <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Om Dhapodkar</span>
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[56px] text-[40px] text-white ss:leading-[100px] leading-[75px] w-full">
            <span>
              <ReactTyped
                strings={[
                  " Web Developer",
                  " Android Developer",
                  " Coding Enthusiast",
                ]}
                typeSpeed={50}
                backSpeed={100}
                loop
              />
            </span>
          </h1>
          <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
            My name is Om Dhapodkar, and I am a passionate web developer and
            Android developer. I thrive on continuously learning new things and
            staying up-to-date with the latest technologies. In addition to my
            development skills, I have a keen interest in competitive coding,
            constantly challenging myself to improve my problem-solving
            abilities.
          </p>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={robot}
            alt="robot"
            className="w-[100%] h-[100%] z-[5] animate-soft-bounce"
          />

          <div className="absolute z-[0] w-[60%] h-[55%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[90%] h-[80%] rounded-full bottom-14 white__gradient" />
          <div className="absolute z-[0] w-[70%] h-[60%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
      <div className={`${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} w-[300px] h-[70px] rounded-lg bg-blue-gradient p-[2px] cursor-pointer`}
        >
          <div
            className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-lg`}
          >
            <a href="../resume/om_resume.pdf" download>
              <p className="font-poppins font-medium text-[24px] leading-[25px]">
                <span className="text-gradient">Download RESUME</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
