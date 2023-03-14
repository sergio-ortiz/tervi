import Image from "next/image";
import styles from "../styles/DualImage.module.css";

const DualImage = () => (
  <div className={styles.dualImage}>
    <Image
      src={"https://upload.wikimedia.org/wikipedia/commons/f/f1/EPA_logo.svg"}
      height={309}
      width={1006}
    />
    <Image
      src={
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/CDC_logo_electronic_color_name.jpg"
      }
      height={446}
      width={618}
    />
  </div>
);

export default DualImage;
