import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedback = () => {
  return (
    <>
      <motion.div
        className={`${styles.paragraph} flex flex-col items-center pt-10`}
        id="contact"
        variants={textVariant()}
      >
        <p className=" text-white font-semibold text-[60px] border-b-2 p-3 border-gray-500">
          Contact Me
        </p>
        <p className="text-[25px] text-gradient pt-[20px]">
          Tell me your Valuable Feedback
        </p>
      </motion.div>
      <motion.div
        className={`max-w-[1840px] m-auto p-4 py-16 text-white font-semibold flex justify-center ${styles.paragraph}`}
      >
        <form
          action="https://getform.io/f/4dea8103-34be-4962-8ec5-1114b379d74e"
          method="post"
          encType="multipart/form-data"
          className="w-[1000px]"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className=" text-gradient uppercase text-sm py-2">
                Name
              </label>
              <input
                className="bg-[#1d1836] border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-gradient uppercase text-sm py-2">
                Contact No.
              </label>
              <input
                className="bg-[#1d1836] border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="contact"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-gradient uppercase text-sm py-2">
              Email
            </label>
            <input
              className="bg-[#1d1836] border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-gradient uppercase text-sm py-2">
              Subject
            </label>
            <input
              className="bg-[#1d1836] border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-gradient uppercase text-sm py-2">
              Message
            </label>
            <textarea
              className="bg-[#1d1836] border-2 rounded-lg p-3 flex border-gray-300"
              name="feedback"
              rows={10}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#143483] border-[text-gradient] border-2 text-white mt-4 w-full p-4 rounded-lg"
          >
            Send Feedback
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Feedback, "feedback");
