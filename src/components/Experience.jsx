import styles from "../style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { school, university, web } from "../assets";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className={`${styles.paragraph}`}>
      <h3 className="text-gradient text-[30px] font-bold font-poppins">
        {experience.title}
      </h3>
      <p className="font-bold text-white text-[22px]">
        {experience.company_name}
      </p>
    </div>
    <ul className={`mt-5 list-disc ml-5 space-y-1 ${styles.paragraph}`}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[12px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const experiences = [
    {
      title: "Completed Schooling",
      company_name: "Joy Senior Secondary School",
      icon: school,
      iconBg: "#000",
      date: "March 2020",
      points: [
        "Successfully completed my 10th standard with an impressive score of 95%.",
        "Continued my academic journey and excelled in my 12th standard, achieving an outstanding score of 96.2%.",
        "Now, I am determined to pursue a career in software engineering by enrolling in a Computer Science Engineering (CSE) BTech degree program.",
      ],
    },
    {
      title: "Started University Studies",
      company_name: "VIT Vellore",
      icon: university,
      iconBg: "#000",
      date: "September 2020 - May 2024",
      points: [
        "Embarked on an exciting journey of higher education at VIT Vellore.",
        "Thrilled and grateful for the opportunity to be a part of this prestigious institution.",
        "Looking forward to four years of immersive learning, personal growth, and endless possibilities.",
        "Excited to delve into the world of computer science and pave my path towards becoming a successful software engineer.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Self - Study",
      icon: web,
      iconBg: "#000",
      date: "May 2021 - Going On...",
      points: [
        "Passionately developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design principles and ensuring seamless cross-browser compatibility.",
        "Dedicatedly thriving to learn new technologies, tools, and frameworks to enhance my skills as a web developer.",
        "Continuously practicing and honing my abilities to stay updated with the latest industry trends and best practices.",
      ],
    },
  ];

  return (
    <section className={`${styles.flexCenter} flex-col`} id="experience">
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col w-full h-full">
        <div className="absolute z-[1] w-[60%] h-[40%] rounded-full bottom-14 white__gradient" />
        <div className="absolute z-[0] w-[20%] h-[65%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
        <>
          <motion.div
            className={`${styles.paragraph} flex flex-col items-center`}
            variants={textVariant()}
          >
            <p className=" text-white font-semibold text-[60px] border-b-2 p-3 border-gray-500">
              My Journey
            </p>
            <p className="text-[25px] text-gradient pt-[20px]">
              What I have done so far
            </p>
          </motion.div>
          <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
