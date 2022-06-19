import Link from "next/link";
import styles from "/styles/Nav.module.css";

const Nav = () => (
  <nav className={styles.navbar}>
    <h1>
      <Link href="">
        <a className={styles.branding}>tervi</a>
      </Link>
    </h1>
    <ul className={styles.navLinks}>
      <li className={styles.navLinkItem}>
        <Link href="">
          <a href="#root" className={styles.navLinkText}>
            Home
          </a>
        </Link>
      </li>
      <li className={styles.navLinkItem}>
        <Link href="">
          <a className={styles.navLinkText}>About</a>
        </Link>
      </li>
      <li className={styles.navLinkItem}>
        <Link href="">
          <a className={styles.navLinkText}>Prices</a>
        </Link>
      </li>
      <li className={styles.navLinkItem}>
        <Link href="">
          <a className={styles.navLinkText}>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
