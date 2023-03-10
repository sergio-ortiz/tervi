import { useState } from "react";
import Link from "next/link";
import MobileMenu from "/components/MobileMenu";
import styles from "/styles/Nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMobile(!mobile);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>
          <Link href="/">
            <a className={styles.branding}>Tervi</a>
          </Link>
        </h1>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link href="/">
              <a href="#root" className={styles.navLinkText}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="#about">
              <a className={styles.navLinkText}>About</a>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/sanitation">
              <a className={styles.navLinkText}>Sanitation</a>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="#contact">
              <a className={styles.navLinkText}>Contact</a>
            </Link>
          </li>
        </ul>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
        <MobileMenu mobile={mobile} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Nav;
