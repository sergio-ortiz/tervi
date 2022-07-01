import Image from "next/image";
import homeHero from "../assets/home_hero.jpg";
import styles from "../styles/Hero.module.css";

const Hero = () => (
  <div className={styles.hero}>
    <Image
      src={homeHero}
      layout="fill"
      objectFit="cover"
      objectPosition="50% 60%"
      placeholder="blur"
      priority
    />
  </div>
);

export default Hero;
