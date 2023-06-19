import React from "react";
import styles from "../style";
import {
  html,
  css,
  react,
  tailwind,
  github,
  js,
  nodejs,
  mongodb,
  express,
} from "../assets";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Stats = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: express,
      title: "Express",
      style: "shadow-red-600",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];

  return (
    <section className={`${styles.flexCenter} flex-col`} id="skills">
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col w-full h-full">
        <>
          <motion.div
            variants={textVariant()}
            className={`${styles.paragraph} flex flex-col items-center`}
          >
            <p className=" text-white font-semibold text-[60px] border-b-2 p-3 border-gray-500">
              Skills
            </p>
            <p className="text-[25px] text-gradient pt-[20px]">
              These are the skills I've worked with
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn()}
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0"
          >
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`${styles.paragraph} shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}
              >
                <img src={src} alt="html" className=" w-20 h-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </motion.div>
        </>
      </div>
    </section>
  );
};

export default SectionWrapper(Stats, "skills");
