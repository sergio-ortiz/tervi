import Nav from "../components/Nav";
import Hero from "../components/Hero";
import styles from "../styles/Header.module.css";

const Header = ({ hero, mainHeading, extras }) => (
  <>
    <Nav extras={extras} />
    <Hero imageSrc={hero} />
    <h1 className={styles.mainHeading}>{mainHeading}</h1>
  </>
);

export default Header;
