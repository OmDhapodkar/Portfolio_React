import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import styles from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github, web } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{ max: 30, scale: 0.8, speed: 250 }}
        className=" bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] p-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="border-2 border-white absolute inset-0 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-5 h-5 object-contain" />
          </div>
        </div>
        <div className={`mt-5 ${styles.paragraph}`}>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-300 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const CardDeal = () => {
  const projects = [
    {
      name: "Coming Up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper ligula, eu gravida urna consectetur ut. ",
      tags: [
        {
          name: "react",
          color: "text-gradient",
        },
        {
          name: "mongodb",
          color: "text-gradient",
        },
        {
          name: "tailwind",
          color: "text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/",
    },
    {
      name: "Coming Up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper ligula, eu gravida urna consectetur ut. ",
      tags: [
        {
          name: "react",
          color: "text-gradient",
        },
        {
          name: "mongodb",
          color: "text-gradient",
        },
        {
          name: "tailwind",
          color: "text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/",
    },
    {
      name: "Coming Up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper ligula, eu gravida urna consectetur ut. ",
      tags: [
        {
          name: "react",
          color: "text-gradient",
        },
        {
          name: "mongodb",
          color: "text-gradient",
        },
        {
          name: "tailwind",
          color: "text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/",
    },
  ];

  return (
    <>
      <motion.div
        className={`${styles.paragraph} flex flex-col items-center`}
        id="projects"
        variants={textVariant()}
      >
        <p className=" text-white font-semibold text-[60px] border-b-2 p-3 border-gray-500">
          My Projects
        </p>
        <p className="text-[25px] text-gradient pt-[20px]">
          What I have made so far
        </p>
      </motion.div>
      <div className={`w-full flex ${styles.paragraph} justify-center`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="my-7 text-slate-400 text-[17px] w-full leading-[30px] text-justify"
        >
          Below are my projects that showcase my skills and problem-solving
          capabilities. Each project reflects my dedication and passion for
          creating innovative solutions. You can find the code for these
          projects on my GitHub repository, accessible through the link on each
          project. Feel free to explore these projects and see how I apply my
          knowledge and expertise to solve various challenges. I continuously
          strive to improve and expand my skill set through practical
          implementations, and these projects are a testament to my growth as a
          developer.
        </motion.p>
      </div>
      <div className="mt-18 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CardDeal, "");
