import Image from "next/image";
import styles from "../styles/Hero.module.css";

const Hero = ({ imageSrc }) => (
  <div className={styles.hero}>
    <Image
      src={imageSrc}
      layout="fill"
      objectFit="cover"
      objectPosition="50% 65%"
      placeholder="blur"
      priority
    />
  </div>
);

export default Hero;
