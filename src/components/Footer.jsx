import styles from "../style";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  let date = new Date().getFullYear();
  console.log(date);

  return (
    <>
      <motion.div
        className={`${styles.paragraph} flex text-gradient text-[36px] justify-center py-10 w-full`}
      >
        <h3>Om Dhapodkar © {date}</h3>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
