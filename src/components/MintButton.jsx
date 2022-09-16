import styles from "../style";
import { arrowUp } from "../assets";

const MintButton = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[50px] bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] `}>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Mint</span>{" "}<span className="text-gradient">Now</span>
      </p>
    </div>
  </div>
);

export default MintButton;