import Link from "next/link";
import styles from "/styles/Nav.module.css";

const Nav = () => (
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
          <Link href="https://www.terminatevirus.com/">
            <a className={styles.navLinkText}>Sanitation</a>
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link href="#contact">
            <a className={styles.navLinkText}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
