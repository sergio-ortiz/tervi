import Image from "next/image";
import brilliantOffice from "../assets/sharp_brilliant_office.jpg";
import styles from "../styles/Hero.module.css";

const Hero = () => (
  <div className={styles.hero}>
    <Image
      src={brilliantOffice}
      layout="fill"
      objectFit="cover"
      objectPosition="50% 65%"
      placeholder="blur"
      priority
    />
  </div>
);

export default Hero;
