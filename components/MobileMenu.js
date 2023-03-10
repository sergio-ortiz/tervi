import Link from "next/link";
import styles from "/styles/MobileMenu.module.css";

const MobileMenu = ({ mobile, toggleMenu, extras }) => (
  <ul
    className={mobile ? `${styles.navLinks} ${styles.show}` : styles.navLinks}
  >
    <li className={styles.navLinkItem}>
      <Link href="/">
        <a href="#root" className={styles.navLinkText} onClick={toggleMenu}>
          Home
        </a>
      </Link>
    </li>
    <li className={styles.navLinkItem}>
      <Link href="#about">
        <a className={styles.navLinkText} onClick={toggleMenu}>
          About
        </a>
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
    <li className={styles.navLinkItem} onClick={toggleMenu}>
      <Link href="#contact">
        <a className={styles.navLinkText}>Contact</a>
      </Link>
    </li>
  </ul>
);

export default MobileMenu;
