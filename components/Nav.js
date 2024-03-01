import { useState } from "react";
import Link from "next/link";
import MobileMenu from "/components/MobileMenu";
import styles from "/styles/Nav.module.css";
import Image from "next/image";

const Nav = ({ extras }) => {
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMobile(!mobile);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1>
          <Link href="/">
            <a>
              <Image
                src="/logo3.png"
                width="60"
                height="60"
              />
            </a>
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
          {extras.map((e) => (
            <li className={styles.navLinkItem}>
              <Link href={"#" + e}>
                <a className={styles.navLinkText}>
                  {`${e[0].toUpperCase()}${e.slice(1)}`}
                </a>
              </Link>
            </li>
          ))}
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
        <MobileMenu mobile={mobile} toggleMenu={toggleMenu} extras={extras} />
      </div>
    </nav>
  );
};

export default Nav;
