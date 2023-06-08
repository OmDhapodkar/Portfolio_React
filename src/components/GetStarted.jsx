import styles from "../style";
import { arrowUp } from "../assets";

export const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] z-[2] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Go to </span>
          </p>
          <a href="https://github.com/OmDhapodkar" target="_blank">
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain cursor-pointer"
            />
          </a>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">my GitHub</span>
        </p>
      </div>
    </div>
  );
};
