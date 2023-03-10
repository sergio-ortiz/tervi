import styles from "../styles/Tab.module.css";
function Tab(props) {
  return (
    <div
      className={
        props.active ? `${styles.tab} ${styles.active}` : styles["tab"]
      }
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Tab;
