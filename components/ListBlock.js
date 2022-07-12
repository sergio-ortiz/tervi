import Image from "next/image";
import styles from "../styles/ListBlock.module.css";
const ListBlock = ({ order, imageSrc, heading, listItems }) => (
  <section className={`${styles.block} ${styles[order]}`}>
    <div className={styles.pic}>
      <Image src={imageSrc} />
    </div>
    <div className={styles.div}>
      <h2 className={styles.heading}>{heading}</h2>
      <ul className={styles.list}>
        {listItems.map((item) => (
          <li className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);
export default ListBlock;
