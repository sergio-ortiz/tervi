import styles from "../styles/ListBlock.module.css";
const ListBlock = ({ heading, listItems }) => (
  <div className={styles.block}>
    <h2 className={styles.heading}>{heading}</h2>
    <ul className={styles.list}>
      {listItems.map((item) => (
        <li className={styles.item}>{item}</li>
      ))}
    </ul>
  </div>
);
export default ListBlock;
